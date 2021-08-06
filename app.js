const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3200;
const methodOverride = require('method-override')
require('./db/connect')

const blogRouter = require('./router/blogRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs ');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.use('/blogs', blogRouter);


app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(port, () => {
    console.log(`the server is listening at ${port}`);
})