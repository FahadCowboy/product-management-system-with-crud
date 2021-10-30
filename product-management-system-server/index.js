const { MongoClient } = require('mongodb')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const ObjectId = require('mongodb').ObjectId

app.use(cors())
app.use(express.json())




app.get('/user', (req, res) => {
   console.log('Server is running well')
   res.send('Server is running well')
})





















app.listen(port, () => {
   console.log('This server is running at port no: ', port)
})