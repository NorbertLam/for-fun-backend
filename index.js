require('dotenv').config()
const express = require('express');
const {Client} =require('pg');

const app = express();
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
})

client.connect()
  .then(() => {
    console.log("Connected");
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    client.end();
  })

app.get('/', (req, res) => {
  res.send('Hello route')
})

app.get('/data', (req, res) => {
  res.send('')
})

app.listen(3000, () => {
  console.log('start')
});
