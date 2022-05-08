const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const connectionString = 'mongodb+srv://fredBear:LgVHWA46Gnig9q3@cluster0.xcnhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.set('view engine', 'ejs') //must go before any app.use, app.get, or app.post
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


app.listen(3000, () => console.log('listening on 3000'))

MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
    console.log('Connect to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(error => console.error(error))
      })

      app.get('/', (req, res) => {
        const cursor = db.collection('quotes').find().toArray()
          .then(results => res.render('index.ejs', { quotes: results }))
          .catch(err => console.error(err))
      })

      app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
          { name: 'Yoda'},
          {
            $set:
            {
              name: req.body.name,
              quote: req.body.quote
            }
          },
          {
            upsert: true
          }
        )
        .then(result => res.json('Success'))
        .catch(err => console.error(err))
      })

      app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
          { name: req.body.name }
        )
        .then(result => {
          if(result.deletedCount === 0) return res.json("No quote to delete")
          return res.json("Deleted Darth Vader's Quote")
        })
        .catch(err => console.error(err))
      })
    })
  .catch(console.error)
