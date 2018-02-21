console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// var http = require('http');

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
  var cursor = db.collection('quotes').find().toArray(function(err,results){
    console.log(results)
  })

})






app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
