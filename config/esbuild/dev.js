import esbuild from 'esbuild'
import essass from 'essass'
import serve from 'create-serve';
import fs from 'fs-extra'
import makeHTML from './makeHTML.js'

esbuild.build({
  entryPoints: ['src/main.js', 'src/sw.js', 'src/faq.js'],
  bundle: true,
  outdir: 'public',
  sourcemap: true,
  plugins: [essass],
  loader: { '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.eot': 'file', '.md': 'text' },
  watch: {
    onRebuild (error, result) {
      if (error) console.error('watch build failed:', error)
      else console.error('watch build succeeded:', result)
      fs.copy('static/', 'public/')
    }
  }
}).then(result => {
  // Call "stop" on the result when you're done
  console.log(result)
  makeHTML()
  serve.start({
    root: './public',
    port: 1234
  })
  // result.stop()
})
