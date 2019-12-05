const fs = require('fs')
const Mustache = require('mustache')
const template = require('./template.html')
const data = './data.json'
const output = './build.html'

async function writeFile (outputPath, record) {
  fs.writeFile(outputPath, record, function (err, data) {
    if (err) throw err
    console.log('Data has been recorded!')
  })
}

async function readFile (dataPath, templatePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(dataPath, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        const record = Mustache.render(templatePath, JSON.parse(data))
        resolve(record)
      }
    })
  })
}

async function createHtml (dataPath, templatePath, outputPath) {
  readFile(dataPath, templatePath)
    .then(record => {
      return record
    })
    .then(record => {
      return writeFile(outputPath, record)
    })
    .then(record => {
      console.log('2', new Date())
      return 1
    })
}

createHtml.then(console.log('3', new Date()))

console.log('1', new Date())
createHtml(data, template, output)

