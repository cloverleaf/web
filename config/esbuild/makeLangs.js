import path from 'path'
import fs from 'fs'
import lc from 'iso-639-1'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function processTranslations () {
  const langs = {}

  console.log('Processing translations')

  const folders = fs.readdirSync(path.join(__dirname, '../../langs'))

  // For each lang folder
  folders.forEach(function (folder) {
    // If it's a folder
    if (fs.statSync(path.join(__dirname, '../../langs', folder)).isDirectory()) {
      // List the files in the folder
      const files = fs.readdirSync(path.join(__dirname, '../../langs/' + folder))

      // For each language in folder
      files.forEach(function (file) {
        const code = file.split('.')[0]

        langs[code] = {
          native: lc.getNativeName(code.split('-')[0])
          // english: lc.getName(code)
        }
      })
    }
  })

  // Write langs to json
  fs.writeFileSync(path.join(__dirname, '../../langs/langs.json'), JSON.stringify(langs))

  console.log('Finished processing translations')
}
