const express = require('express');
const { dirname } = require('path');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 5000;
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {});
});

app.get('/comp', (req, res) => {
  res.render('com', {});
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'Error 404',
    name: 'Error Page detected',
    errorMessage: 'Article not found',
  });
});

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

app.listen(5000, () => {
  console.log(`Server is up on port ${port}`);
});
