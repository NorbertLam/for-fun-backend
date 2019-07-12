const express = require('express');
const {Client} =require('pg');

const app = express();
const client = new Client({
  user: 'placeholder',
  password: 'placeholder',
  host: 'placeholder',
  port: 'placeholder',
  database: 'placeholder'
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

app.listen(3000, () => {
  console.log('start')
});
