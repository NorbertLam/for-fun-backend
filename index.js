require('dotenv').config()
const express = require('express');
const {Client} =require('pg');

const app = express();
app.use(express.json())

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

app.get('/data', async (req, res) => {
  const rows = await readAll();

  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
})

app.listen(3000, () => {
  console.log('start')
});

async function readAll() {
  try {
  const results = await client.query("select * from clips;");
  return results.rows;
  }
  catch(e){
      return [];
  }
}
