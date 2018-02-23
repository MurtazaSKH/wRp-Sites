const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// var nunjucksRender = require('gulp-nunjucks-render');
// var http = require('http');
app.set('view engine','ejs')
app.listen(3000, function() {
  console.log('listening on 3000')
  console.log(__dirname)
});

app.use(bodyParser.urlencoded({
  extended: true
}))

var db;
MongoClient.connect('mongodb://localhost:27017/up_db_first', (err, client) => {
  if (err) return console.log(err)
  db = client.db('up_db_first') // assign the database to db


})

app.get('/', (req, res) => {
  // res.send('Hello World')
  // res.sendFile(__dirname + '/index.html')
  // var cursor = db.collection('quotes').find().toArray(function(err,results){
  //   console.log(results)
  // })

  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })

})

app.use(express.static('public'))

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
