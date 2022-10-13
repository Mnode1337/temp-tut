
const http = require('http');
const { request } = require('https');

// req is the incoming request object
// res is the outgoing response object.
const server = http.createServer((req,res) => {
	if(req.url === '/') {
		res.end('Welcome to our home page!')
	}
	
	if(req.url=== '/about') {
		res.end('Here is our short history')
	}
	res.end(`
	<h1>Oosps!</h1>
	<p>We can't seem to find the page that you are looking for</p>
	<a href="/">back home</a>
    `)
})

server.listen(5000)