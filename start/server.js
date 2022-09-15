const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

	// lodash
	const num = _.random(0, 20);
	console.log(num)

	const greet = _.once(() => {
		console.log('hello world');
	});

	greet();
	greet();

	res.setHeader('Content-Type', 'text/html');

	let path = './views/';
	switch (req.url) {
		case '/':
			path += 'index.html' // the page to be rendered
			res.statusCode = 200;
			break; //ends the switch statement
		case '/about':
			path += 'about.html'
			res.statusCode = 200;
			break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about'); // redirects it back to about page
			res.end();
			break;
		default: // if none of the above cases are met, then run this one
			path += '404.html'
			res.statusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err)
			res.end
		} else {
			res.write(data);
			res.end
		}
	})

})

server.listen(3000, 'localhost', () => {
	console.log('already listening')
})