const esbuild = require('esbuild')
const essass = require('essass')
const translation = require('./translation.js')
const fs = require('fs-extra')

translation.then(() => {
  // Copy all static files
  fs.copy('static/', 'public/').then(() => {
    esbuild.build({
      entryPoints: ['src/main.js'],
      bundle: true,
      minify: true,
      outdir: 'public',
      sourcemap: true,
      plugins: [essass],
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
})
