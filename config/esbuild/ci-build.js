import esbuild from 'esbuild'
import essass from 'essass'
// const translation = require('./translation.js')
import makeLangs from './makeLangs.js'
import fs from 'fs-extra'
import rimraf from 'rimraf'
import makeHTML from './makeHTML.js'

rimraf.sync('public/*')
makeLangs()
// Copy all static files
fs.copy('static/', 'public/').then(() => {
  esbuild.build({
    entryPoints: ['src/main.js', 'src/sw.js', 'src/faq.js'],
    bundle: true,
    minify: true,
    outdir: 'public',
    sourcemap: true,
    plugins: [essass],
    loader: { '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.eot': 'file', '.md': 'text' },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    color: true
  }).catch(() => process.exit(1)).then(() => {
    // Generate html
    makeHTML()
  }).catch(() => process.exit(1))
}).catch(() => process.exit(1))
