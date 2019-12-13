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
      return writeFile(outputPath, record)
    })
}

console.log('1', new Date())
createHtml(data, template, output).then(console.log('3', new Date()))
