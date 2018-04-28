var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 倒水')
})
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭')
})


life.emit('求安慰', '我')