const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const ssri = require('ssri')

module.exports = fs.readFile(path.join(__dirname, '../../langs/langs.json'), 'utf8', function (err, data) {
  if (err) console.error(err)

  const git_hash = () => {
    const rev = fs.readFileSync('.git/HEAD').toString().trim().split(/.*[: ]/).slice(-1)[0]
    if (rev.indexOf('/') === -1) {
      return rev
    } else {
      return fs.readFileSync('.git/' + rev).toString().trim()
    }
  }

  const gitHash = git_hash()

  const folders = fs.readdirSync(path.join(__dirname, '../../langs/'), { withFileTypes: true })

  const js = fs.readFileSync(path.join(__dirname, '../../public/main.js'))
  const jsIntegrity = ssri.fromData(js, { algorithms: ['sha256'] })

  const css = fs.readFileSync(path.join(__dirname, '../../public/main.css'))
  const cssIntegrity = ssri.fromData(css, { algorithms: ['sha256'] })

  // For each lang folder
  folders.forEach(function (file) {
    if (file.isDirectory()) {
      const folder = file.name
      // List the files in the folder
      const files = fs.readdirSync(path.join(__dirname, '../../langs/' + folder))

      // For each language in folder
      files.forEach(function (file) {
        const code = file.split('.')[0]

        // Read json
        const json = JSON.parse(fs.readFileSync(path.join(__dirname, `../../langs/${folder}/${file}`), 'utf8'))

        const replacements = {
          timestamp: new Date(),
          gitHash: gitHash,
          jsSrc: 'main.js',
          jsIntegrity: jsIntegrity,
          cssSrc: 'main.css',
          cssIntegrity: cssIntegrity
        }

        // Don't use SRIs if running in dev
        if (process.env.NODE_ENV === 'development') {
          replacements.jsIntegrity = ''
          replacements.cssIntegrity = ''
        }

        for (const k in json) {
          replacements[k] = json[k].message
        }

        // Set path val
        const out = file === 'en-GB.json' ? 'index.html' : code + '.html'

        // Compile ejs -> html
        ejs.renderFile('./src/src.ejs', replacements, {}, function (err, str) {
          if (err) console.error(err)
          fs.writeFileSync(path.join(__dirname, `../../public/${out}`), str)
        })
      })
    }
  })
})
