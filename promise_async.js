const fs = require('fs')
const Mustache = require('mustache')
const template = require('./template.html')
const data = './data.json'
const output = './build.html'

function writeFile(outputPath, record) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(outputPath, record, function (err, data) {
      if (err) {
        reject(err)
      } else {
        console.log('3', new Date())
        console.log('Data has been recorded!')
        resolve()
      }
    })
  })
}

function readFile (dataPath, templatePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(dataPath, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        const record = Mustache.render(templatePath, JSON.parse(data))
        console.log('2', new Date())
        resolve(record)
      }
    })
  })
}

function createHtml (dataPath, templatePath, outputPath) {
  console.log('1', new Date())
  return readFile(dataPath, templatePath)
    .then(function (record) {
      return writeFile(outputPath, record)
    })
}

createHtml(data, template, output)

