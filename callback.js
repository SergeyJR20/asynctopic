const fs = require('fs')
const Mustache = require('mustache')
const template = require('./template.html')
const data = './data.json'
const output = './build.html'

function createHtml (dataPath, templatePath, outputPath, callback) {
  return callback()
}

createHtml(data, template, output, () => {
  fs.readFile(data, 'utf-8', function (err, data) {
    if (err) {
      console.error(err)
    } else {
      createHtml(data, template, output, () => {
        const record = Mustache.render(template, JSON.parse(data))
        fs.writeFile(output, record, function (err, data) {
          if (err) {
            console.error(err)
          } else {
            console.error('Callback is the best')
          }
        })
      })
    }
  })
})
