const EventEmitter = require('events')

const emitter = new EventEmitter()

const hello = (name) => {
  console.log('Привет')
}
emitter.on('hello', hello)

emitter.on('answer', answer => {
  console.log(`Ваши дела ${answer}`)
})

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Hello?\n', (answer) => {
      ['hello', 'привет'].includes(answer.toLowerCase()) && emitter.emit('hello') || process.exit(1)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Как у вас дела?\n', (answer) => {
      emitter.emit('answer', answer)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()

  rl.close()
}

main()

const chai = require('chai')
const expect = chai.expect

expect(emitter).to.be.an.instanceof(EventEmitter)

// expect(emitter.emit('answer', answer)).to.be.true
