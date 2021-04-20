const path = require('path')
const fs = require('fs')
const lc = require('locale-code')

function processTranslations () {
  const langs = {}

  console.log('Processing translations')

  const folders = fs.readdirSync(path.join(__dirname, '../../langs/'))

  // For each lang folder
  folders.forEach(function (folder) {
    // List the files in the folder
    const files = fs.readdirSync(path.join(__dirname, '../../langs/' + folder))

    // For each language in folder
    files.forEach(function (file) {
      const code = file.split('.')[0]

      langs[code] = {
        native: lc.getLanguageNativeName(code)
        // english: lc.getLanguageName(code)
      }
    })
  })

  // Write langs to json
  fs.writeFileSync(path.join(__dirname, '../../langs/langs.json'), JSON.stringify(langs))

  console.log('Finished processing translations')
}

module.exports = processTranslations
