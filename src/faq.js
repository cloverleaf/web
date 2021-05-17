import markdownFile from './faq.md'

const myDiv = document.createElement('div')

myDiv.innerHTML = markdownFile.html

document.body.appendChild(myDiv)
