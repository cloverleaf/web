const path = require('path')
const fs = require('fs')
const StreamZip = require('node-stream-zip')
const fetch = require('node-fetch')
const rimraf = require('rimraf')
const makeLangs = require('./makeLangs.js')

const CROWDIN_KEY = fs.readFileSync(path.join(__dirname, '../secrets/crowdin_key.txt'), 'utf8')

// Wipe old translations
rimraf.sync('langs/')

async function unzip () {
  // eslint-disable-next-line new-cap
  const directory = await new StreamZip.async({ file: path.join(__dirname, 'temp.zip').toString() })

  return directory.extract(
    null,
    path.join(__dirname, '../../langs/').toString()
  )
}

module.exports = new Promise(function (resolve, reject) {
  // Build translations
  fetch(`https://api.crowdin.com/api/project/cloverleaf/export?key=${CROWDIN_KEY}`).then(res => res.text())
    .then(data => {
      if (data.includes('success status="skipped"')) {
        console.log('Translations up to date')
      } else {
        console.log('Updating translations')
      }
      // Download translations
      return fetch(`https://api.crowdin.com/api/project/cloverleaf/download/all.zip?key=${CROWDIN_KEY}`)
    }).then(res => res.buffer())
    .then(zip => {
      // Unzip translations

      // Write to temp file locally
      fs.writeFileSync(path.join(__dirname, 'temp.zip'), zip)

      // Make langs folder
      const dir = path.join(__dirname, '../../langs/')

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }

      // Extract zip to langs folder
      unzip().then(unzipped => {
        // Make plugin instance
        resolve(makeLangs())

        // Remove temp file
        rimraf.sync(path.join(__dirname, 'temp.zip'))
      })
    })
})
