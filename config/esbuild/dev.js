const esbuild = require('esbuild')
const essass = require('essass')
const liveServer = require('live-server')
const fs = require('fs-extra')

esbuild.build({
  entryPoints: ['src/main.js', 'src/sw.js'],
  bundle: true,
  outdir: 'public',
  sourcemap: true,
  plugins: [essass],
  loader: { '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.eot': 'file' },
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
  require('./makeHTML')
  liveServer.start({
    root: './public',
    open: true,
    port: 1234
  })
  // result.stop()
})
