/* global M */

// Using a custom flavour of materialize to allow for fuzzy searching
// https://github.com/ChildishGiant/materialize/tree/custom-sort
import './materialize'
import Fuse from 'fuse.js'

import './style.scss'

Math.seedrandom = require('seedrandom')
const cloverleaf = require('cloverleaf')

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject (item) {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep (target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

const jsonData = mergeDeep(require('../data/logos.json'), cloverleaf.siteData)
const fuse = new Fuse(Object.keys(jsonData), {
  // Include the score so we can weight it
  includeScore: true,
  // Don't bother sorting as we will sort again
  shouldSort: false
})
const themeData = require('../data/themes.json')
const langData = require('../langs/langs.json')
const autoCompleteData = {} // Here for scope purposes
window.defaultMinLength = 4 // We
window.defaultMaxLength = 512 // All
window.minLength = window.defaultMinLength // Are,
window.maxLength = window.defaultMaxLength // Really
const defaultTheme = 'Vanilla'
const extension = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? '.html' : '' // Fix links if running locally
let targetLength = 16
// let select; // Theme selector
let presetInUse = false // Flag true if a preset is selected
// Get weights or use an empty object
let weights = JSON.parse(localStorage.getItem('weights')) || {}
let weightsMax = JSON.parse(localStorage.getItem('weightsMax')) || 1

window.generate = function () {
  if (document.getElementById('app').value && document.getElementById('pass').value) {
    document.getElementById('result').value =
    cloverleaf.process(
      document.getElementById('app').value,
      document.getElementById('pass').value,
      presetInUse,
      Number(document.getElementById('length').value)
    )
  }
}

/**
 * @param  {String} passedTheme - Changes the theme and updates the cookie to match
 */
window.changeTheme = function (passedTheme) {
  // Invalid theme
  if (!themeData[passedTheme]) {
    console.error(`Invalid theme "${passedTheme}", defaulting to ${defaultTheme}`)
    passedTheme = defaultTheme
  }

  localStorage.setItem('theme', passedTheme)

  document.documentElement.style.setProperty('--accentColor', themeData[passedTheme].accent)
  document.documentElement.style.setProperty('--lightAccent', themeData[passedTheme].lightAccent)
  document.documentElement.style.setProperty('--textColor', themeData[passedTheme].text)
  document.documentElement.style.setProperty('--backgroundColor', themeData[passedTheme].background)
  document.documentElement.style.setProperty('--internalColor', themeData[passedTheme].internal)
  document.documentElement.style.setProperty('--incorrectColor', themeData[passedTheme].incorrect)
  document.documentElement.style.setProperty('--correctColor', themeData[passedTheme].correct)
  document.documentElement.style.setProperty('--inputColor', themeData[passedTheme].inputColor)
  document.documentElement.style.setProperty('--linkColor', themeData[passedTheme].linkColor)
  document.documentElement.style.setProperty('--highlightColor', themeData[passedTheme].highlightColor)
  document.documentElement.style.setProperty('--accentRGBs', themeData[passedTheme].accentRGBs)
}

// Change theme to stored before the page loads to avoid flicker.
window.changeTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : defaultTheme)

function getQueryStrings () {
  const assoc = {}
  const decode = function (s) {
    return decodeURIComponent(s.replace(/\+/g, ' '))
  }
  const queryString = location.search.substring(1)
  const keyValues = queryString.split('&')

  keyValues.forEach(product => {
    const key = product.split('=')
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1])
    }
  })

  return assoc
}

function normalise (val, max, min) { return (val - min) / (max - min) }

// For showing / hiding the master password
window.passwordToggle = function () {
  // If the switch is on / to the right / "Hide"
  if (document.getElementById('passwordToggle').checked) {
    // Make the password field use blobs
    document.getElementById('pass').type = 'password'
  } else {
    // If it's off
    // Make the password field use actual text so you can see/copy it.
    document.getElementById('pass').type = 'text'
  }
}

window.copy = function () {
  const pass = document.getElementById('result').value

  if (pass === '') {
    M.toast({
      text: 'You have no password to copy.',
      displayLength: 4000,
      classes: 'warning'
    })
  } else {
    let copyElement = document.createElement('input')
    copyElement.setAttribute('type', 'text')
    copyElement.setAttribute('value', pass)
    copyElement = document.body.appendChild(copyElement)
    copyElement.select()
    document.execCommand('copy')
    copyElement.remove()

    M.toast({
      text: 'Successfully copied!',
      displayLength: 4000,
      classes: 'success'
    })
  }
}

// For showing / hiding the generated password
window.resultToggle = function () {
  // If the switch is on / to the right / "Hide"
  if (document.getElementById('resultToggle').checked) {
    // Make the password field use blobs
    document.getElementById('result').type = 'password'
  } else {
    // If it's off
    // Make the password field use actual text so you can see/copy it.
    document.getElementById('result').type = 'text'
  }
}

/**
 * A random int between two values
 * @param  {Number} min - Lowest value possible, inclusive
 * @param  {Number} max - Highest value possible, exclusive
 */
window.getRandomArbitrary = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min)
}

/**
 * @param  {String} passedLang - Changes the language and updates the cookie to match
 */
window.changeLang = function (passedLang) {
  // Invalid language code
  if (!langData[passedLang]) {
    throw new Error(`Invalid language "${passedLang}"`)
  }

  localStorage.setItem('lang', passedLang)

  // Ensure the correct language is loaded
  const file = passedLang === 'en-GB' ? '/' : '/' + passedLang + extension

  // If not on the chosen page
  if (window.location.pathname.toLowerCase() !== file.toLowerCase()) {
    window.location.pathname = file
  }
}

/**
 * Sets the small logo based off an app name
 * @param  {string} appName
 */
function setLogo (appName) {
  let logo

  switch (typeof jsonData[appName].mini) {
    case 'string':
      logo = jsonData[appName].mini
      break

    case 'boolean':
      if (jsonData[appName].mini) {
        logo = `logos/${appName}-MINI.svg`
      } else {
        if (jsonData[appName].logo) {
          logo = jsonData[appName].logo
        } else {
          logo = `logos/${appName}.svg`
        }
      }
      break

    case 'undefined':

      if (jsonData[appName].logo) {
        logo = jsonData[appName].logo
      } else {
        logo = `logos/${appName}.svg`
      }

      break

    default:
      throw new Error(`Invalid mini value "${typeof jsonData[appName].mini}" for ${jsonData[appName]} preset`)
  }

  // Set image
  document.getElementById('logoContainer').style.display = 'flex'
  document.getElementById('logo').src = logo
  document.getElementById('logo').alt = appName
  document.getElementById('logo').title = appName
}

window.fixLength = function () {
  const length = document.getElementById('length').value

  if (!(window.minLength <= length && length <= window.maxLength)) {
    // if the length is invalid
    if (length > window.maxLength) {
      // Too long
      document.getElementById('length').value = window.maxLength
    } else if (length < window.minLength) {
      // Too short
      document.getElementById('length').value = window.minLength
    }
  }
}

/**
 * On page load
 */
window.onload = function () {
  // Process langs.json
  for (const key in langData) {
    // Add select option for language
    const option = document.createElement('option')
    option.innerHTML = langData[key].native
    option.dataset.short = key

    document.querySelector('#lang').appendChild(option)
  }

  let usingLang

  // If the user has a language cookie
  if (localStorage.getItem('lang') !== null && langData[localStorage.getItem('lang')] !== undefined) {
    // Select the correct selection
    document.getElementById('lang').value = langData[localStorage.getItem('lang')].native
    usingLang = localStorage.getItem('lang')
  } else {
    // If no lang cookie exists
    // Check navigator language
    const lang = navigator.language || navigator.userLanguage
    const first = lang.split('-')[0]
    const matches = Object.keys(langData).filter(x => x.startsWith(first))

    // If there's a translation for the user's language
    if (matches.length !== 0) {
      // Pick it
      document.getElementById('lang').value = langData[matches[0]].native
      localStorage.setItem('lang', matches[0])
      usingLang = matches[0]
    } else {
      // Pick english
      document.getElementById('lang').value = 'English'
      localStorage.setItem('lang', 'en-GB')
      usingLang = 'en-GB'
    }
  }

  window.changeLang(usingLang)

  // Themes have already been set, now we handle the options
  // Process themes.json
  for (const key in themeData) {
    // Add select option for the theme
    const themeOption = document.createElement('option')
    themeOption.id = key
    themeOption.innerHTML = key
    document.querySelector('#theme').appendChild(themeOption)
  }

  // Set the select to chosen theme or vanilla as a backup
  document.getElementById('theme').value = localStorage.getItem('theme') ? localStorage.getItem('theme') : defaultTheme

  // Initialize tooltips
  M.Tooltip.init(document.querySelectorAll('.tooltipped'))

  // Initialise the side nav
  M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'left' })
  window.side = M.Sidenav.getInstance(document.getElementById('slide-out'))
  // Initalise the theme selection
  // Or not since materialize styled select is terrible.
  // select = M.FormSelect.init(document.querySelectorAll("select"))[0];

  // If user hasn't opted out of storing passwords
  if (localStorage.getItem('store') !== 'false') {
    // If there's a stored password
    if (localStorage.getItem('password')) {
      // Fill the password input with the correct password
      document.getElementById('pass').value = localStorage.getItem('password')
      // Raise the text on the input
      document.querySelector("label[for='pass']").classList.add('active')
      // Colour the underline
      colourUnderline()
    }

    // Ensure session switch is true
    document.getElementById('session-toggle').checked = true
    // Ensure the store token is set
    localStorage.setItem('store', true)
  }

  if (localStorage.getItem('length')) {
    targetLength = localStorage.getItem('length')

    document.getElementById('length-pref').value = targetLength
    document.getElementById('length').value = targetLength
  }

  // Process the sites.json for the autocomplete structure
  for (const key in jsonData) {
    // If the preset has a custom logo url
    if (jsonData[key].logo) {
      autoCompleteData[key] = jsonData[key].logo
    } else {
      // Set the logo url to the default
      autoCompleteData[key] = `logos/${key}.svg`
    }
  }

  // Setup possible autocomplete sites
  M.Autocomplete.init(document.getElementById('app'), {
    data: autoCompleteData,

    // called when an autocomplete is used.
    onAutocomplete (val) {
      // Set image
      setLogo(val)
      let length = targetLength

      // Update weights before aliases
      // If there's no key for that preset
      if (!(val in weights)) {
        // Make one
        // It's set to two because the default weight is 1
        weights[val] = 2
      } else {
        // There is a key for the preset
        weights[val] += 1
      }

      // Save weights
      localStorage.setItem('weights', JSON.stringify(weights))
      // Save weights max
      if (weights[val] > weightsMax) {
        weightsMax = weights[val]
        localStorage.setItem('weightsMax', JSON.stringify(weightsMax))
      }

      // If it's an alias for another app
      if (jsonData[val].alias) {
        // Change the name of the app we're using to its alias
        val = jsonData[val].alias
        console.debug(`Using alias: ${val}`)
      }

      if (jsonData[val].minLength) {
        window.minLength = jsonData[val].minLength
      } else {
        window.minLength = window.defaultMinLength
      }
      document.getElementById('length').min = window.minLength

      if (jsonData[val].maxLength) {
        window.maxLength = jsonData[val].maxLength
      } else {
        window.maxLength = window.defaultMaxLength
      }

      document.getElementById('length').max = window.maxLength

      if (!(window.minLength <= length && length <= window.maxLength)) {
        length = window.maxLength
      }

      document.getElementById('length').max = window.maxLength

      window.fixLength()

      // Set chosen var
      presetInUse = true

      // In case there's already a password (eg switching sites / presets) regen password
      window.generate()
    },

    // Minimum number of characters typed for the dialog to open
    minLength: 0,
    // For deciding the order of options.
    customSort (list, search) {
      const toDraw = []
      const results = fuse.search(search)

      // If there are no results
      if (results.length === 0) {
        // If there are used presets
        if (Object.keys(weights).length !== 0) {
          for (const preset in weights) {
            results.push({ item: preset, score: 1 })
          }
        } else {
          // If there aren't, use whole list
          for (const preset in jsonData) {
            results.push({ item: preset, score: 1 })
          }
        }
      }

      for (const key in results) {
        const weight = normalise(
          weights[results[key].item] || 0,
          weightsMax,
          0
        )

        toDraw.push({
          data: list[results[key].item],
          key: results[key].item,
          // Times by 0.9 so weight never overpowers the score
          score: results[key].score * (1 - (weight * 0.9))
        })
      }

      // Sort by weighted score
      toDraw.sort(function (a, b) {
        if (a.score > b.score) { return 1 } else if (a.score < b.score) { return -1 }
        // Scores equal, sort by alphabetical
        if (a.key > b.key) { return 1 } else if (a.key < b.key) { return -1 }
        // If all is equal
        return 0
      })

      return toDraw
    }

  })

  // Autocomplete has been setup
  // Move the cursor to the app field
  document.getElementById('app').focus()
  document.querySelector("label[for='app']").classList.add('active')

  const qs = getQueryStrings()

  // If an app has been passed by query string
  if (qs.app) {
    const appName = String(qs.app)

    // Set the app name
    document.getElementById('app').value = appName

    // If it's a preset
    if (jsonData[appName]) {
      // Click into the app field to open the dropdown
      document.getElementById('app').click()
      // Click the first result
      document.querySelector('.autocomplete-content.dropdown-content :first-child').click()
    }

    // In case there's already a password
    window.generate()

    // Move the cursor to the app field
    document.getElementById('pass').focus()
    document.querySelector("label[for='pass']").classList.add('active')
  }

  // Setup copy shortcut
  document.body.addEventListener('keydown', e => {
    // If Ctrl + C is pressed
    if (e.ctrlKey && e.code === 'KeyC') {
      // If the user isn't selecting anything
      if (window.getSelection().toString() === '') {
        // Run existing copy command
        window.copy()
      }
    }
  })

  if (process.env.NODE_ENV === 'development') require('./debug')
}

/**
 * Use the current password as a seed to colour the underline of the field
 */
function colourUnderline () {
  // If there's a password
  if (document.getElementById('pass').value) {
    // Seed the
    Math.seedrandom(document.getElementById('pass').value)
    const colour = `HSL(${window.getRandomArbitrary(0, 360)}, ${window.getRandomArbitrary(
      60,
      100
    )}%, ${window.getRandomArbitrary(45, 80)}%)`
    document
      .getElementById('pass')
      .style.setProperty('--accentColor', colour)
  } else {
    // If there's no password, reset the underline colour
    document.getElementById('pass').removeAttribute('style')
  }
}

window.appInput = function () {
  // Everytime the user types, it invalidates the preset
  presetInUse = false

  // Clear logo
  document.getElementById('logoContainer').style.display = 'none'
  document.getElementById('logo').removeAttribute('src')
  document.getElementById('logo').removeAttribute('alt')
  document.getElementById('logo').removeAttribute('title')

  // Reset the mins and maxes for length
  window.minLength = window.defaultMinLength
  window.maxLength = window.defaultMaxLength
  document.getElementById('length').max = window.maxLength
  document.getElementById('length').min = window.minLength

  document.getElementById('length').value = targetLength

  window.generate()
}

window.passwordUp = function () {
  colourUnderline()

  // If the user is opted into saving the master password
  if (localStorage.getItem('store') === 'true') {
    // If there's a password
    if (document.getElementById('pass').value) {
      // Store it
      localStorage.setItem('password', document.getElementById('pass').value)
    } else {
      // Otherwise, delete the value
      localStorage.removeItem('password')
    }
  }

  // Regen the password
  window.generate()
}

window.appDown = function (e) {
  // Enter pressed and dropdown visible
  if (
    (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) &&
    document.querySelector('.autocomplete-content.dropdown-content').offsetHeight > 0
  ) {
    // If no entry is selected
    if (document.querySelector('.autocomplete-content.dropdown-content .active') === null) {
      // Click the first preset
      document.querySelector('.autocomplete-content.dropdown-content :first-child').click()
    }
  }
}

// For disabling/enabling password saving
window.sessionToggle = function () {
  // If the switch is on / to the right
  if (document.getElementById('session-toggle').checked) {
    // Set session cookie cookie
    localStorage.setItem('store', true)

    // If there's a password
    if (document.getElementById('pass').value) {
      // Store it
      localStorage.setItem('password', document.getElementById('pass').value)
    } else {
      // Otherwise, delete the value
      localStorage.removeItem('password')
    }
  } else {
    // Stop saving password
    localStorage.setItem('store', false)
    // Delete any exist stored password
    localStorage.removeItem('password')
  }
}

window.lengthPref = function (passedLength) {
  if (!(window.defaultMinLength <= passedLength && passedLength <= window.defaultMaxLength)) {
    // if the length is invalid
    if (passedLength > window.defaultMaxLength) {
      // Too long
      passedLength = window.defaultMaxLength
    } else if (passedLength < window.defaultMinLength) {
      // Too short
      passedLength = window.defaultMinLength
    }

    document.getElementById('length-pref').value = passedLength
  }

  targetLength = passedLength
  localStorage.setItem('length', passedLength)

  document.getElementById('length').value = passedLength
  window.generate()
}

window.presetScroll = function () {
  const selected = document.querySelector('.autocomplete-content.dropdown-content .active')
  if (selected) selected.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
}

window.install = function () {
  try {
    window.installPromptEvent.prompt()
  } catch (TypeError) {
    M.toast({
      text: 'Failed to install app.',
      displayLength: 4000,
      classes: 'warning'
    })
  }
}

window.reset = function () {
  weights = {}
  localStorage.removeItem('weights')
  localStorage.removeItem('weightsMax')

  if (localStorage.getItem('weights') === null && localStorage.getItem('weightsMax') === null) {
    M.toast({
      text: 'Wiped stored preset usage',
      displayLength: 4000,
      classes: 'success'
    })
  } else {
    M.toast({
      text: 'Failed to wipe stored preset usage',
      displayLength: 4000,
      classes: 'error'
    })
  }
}
