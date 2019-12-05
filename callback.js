const fs = require('fs')
const Mustache = require('mustache')
const template = require('./template.html')
const data = './data.json'
const output = './build.html'

function writeFile (outputPath, record) {
  fs.writeFile(outputPath, record, function (err, data) {
    if (err) throw err
  })
}

function createHtml (dataPath, templatePath, outputPath, callback) {
  fs.readFile(dataPath, 'utf-8', function (err, data) {
    if (err) {
      console.error(err)
    } else {
      return callback(outputPath, Mustache.render(templatePath, JSON.parse(data)))
    }
  })
}

createHtml(data, template, output, writeFile)