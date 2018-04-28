/*
 * @Author: mike.zhang
 * @Date:   2018-04-28 11:58:34
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-04-28 12:04:17
 */
var http = require('http')

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	})
	res.end('Hello World\n')
})
server.listen(20000, '127.0.0.1')