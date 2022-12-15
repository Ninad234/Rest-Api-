require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log("connected to the database"))

app.use(express.json());

const UserRouter = require('./routes/User')
app.use('/User',UserRouter)
app.listen(8080,() => console.log('Server Started'))

module.exports = db;