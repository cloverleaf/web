import esbuild from 'esbuild'
import essass from 'essass'
import translation from './translation.js'
import fs from 'fs-extra'
import rimraf from 'rimraf'
import makeHTML from './makeHTML.js'
import autoprefixer from 'autoprefixer'
import postCssPlugin from '@deanc/esbuild-plugin-postcss'

rimraf.sync('public/*')
translation.then(() => {
  // Copy all static files
  fs.copy('static/', 'public/').then(() => {
    esbuild.build({
      entryPoints: ['src/main.js', 'src/sw.js', 'src/faq.js'],
      bundle: true,
      minify: true,
      outdir: 'public',
      sourcemap: true,
      plugins: [essass,
        postCssPlugin({
          plugins: [autoprefixer]
        })],
      loader: { '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.eot': 'file', '.md': 'text' },
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      color: true
    }).catch(function (error) { console.error(error); process.exit(1) }).then(() => {
      // Generate html
      makeHTML()
    }).catch(function (error) { console.error(error); process.exit(1) })
  }).catch(function (error) { console.error(error); process.exit(1) })
})
