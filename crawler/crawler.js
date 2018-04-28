var http = require('http')
var url = 'http://www.imooc.com/learn/348'
var cheerio = require('cheerio')

function filterChapters(html) {

	console.log(html)
}

http.get(url, function(res) {
	var html = ''
	res.on('data', function(data) {
		html += data
	})

	res.on('end', function() {
		filterChapters(html)
	})
}).on('error', function() {
	console.log('error')
})