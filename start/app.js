const express = require('express');


const app = express();

//register view engine
//app.set lets us configure some application settings
app.set('view engine', 'ejs');
//set another folder to be the views file
// app.set('views', 'otherviews')

//listen for requests
app.listen(3000);

// listens for get requests

app.get('/about', (req, res) => {
	res.render('about');
})

app.get('/about-us', (req, res) => {
	res.redirect('./about');
})

app.get('/', (req, res) => {
	res.render('index');
})

//404 page
// the use function handles every request that doesn't match the ones above
// and it must be at the bottom, because the request has to run through every available
// url before it ends up here. hence 'use' this request if none if the above is true
app.use((req, res) => {
	res.status(404).render('404')
})