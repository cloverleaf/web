const sassPlugin = require('esbuild-plugin-sass')

require('esbuild').build({
  entryPoints: ['src/main.js'],
  external: ['*.woff', '*.woff2', '*.ttf', '*.eot'],
  outfile: 'out.js',
  plugins: [sassPlugin()],
  bundle: true,
  watch: true
}).then(result => {
  // Call "stop" on the result when you're done
  result.stop()
})
