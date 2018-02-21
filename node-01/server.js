console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// var http = require('http');

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function() {
  console.log('listening on 3000')
  console.log(__dirname)
});

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.sendFile(__dirname + '/index.html')

})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

// var db;
MongoClient.connect('http://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('up_db_first') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
