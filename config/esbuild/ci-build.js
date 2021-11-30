const esbuild = require('esbuild')
const essass = require('essass')
// const translation = require('./translation.js')
const makeLangs = require('./makeLangs.js')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const { markdownPlugin } = require('esbuild-plugin-markdown')

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
    plugins: [essass, markdownPlugin()],
    loader: { '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.eot': 'file' },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    color: true
  }).catch(() => process.exit(1)).then(() => {
    // Generate html
    require('./makeHTML')
  }).catch(() => process.exit(1))
}).catch(() => process.exit(1))
