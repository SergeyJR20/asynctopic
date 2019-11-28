const EventEmitter = require('events');

const emitter = new EventEmitter()

emitter.on('hello', () => {
	console.log('РџСЂРёРІРµС‚')
})

emitter.on('answer', answer => {
	console.log(`Р’Р°С€Рё РґРµР»Р° ${ answer }`)
})

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
	return new Promise((resolve, reject) => {
		rl.question('Hello?\n', (answer) => {
			['hello', 'РїСЂРёРІРµС‚'].includes(answer.toLowerCase()) && emitter.emit('hello') || process.exit(1)
			resolve()
		})
  })
}

const question2 = () => {
	return new Promise((resolve, reject) => {
		rl.question('РљР°Рє Сѓ РІР°СЃ РґРµР»Р°?\n', (answer) => {
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
  
  
  

