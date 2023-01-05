import express from 'express'

import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import connection from './database/db.js'

// Importing the Routes

import Routes from './Routes/routes.js'
const app = express()
// First Congig the dotenv
dotenv.config()
const PORT = process.env.PORT || 8080

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
// console.log(username, password)
app.use(bodyParser.json({ extented: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
// Routes Use
app.use('/', Routes)

connection(username, password)

app.listen(PORT, () => {
  console.log('The Server is running on this', PORT)
})

// mongodb+srv://AshutoshKumar:bhulgaya@cluster0.9fm9zse.mongodb.net/?retryWrites=true&w=majority
