import { Pool } from 'postgres-pool';
import express from 'express';


const app = express();
const port = 3000;

app.get('/',(req,res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

const pool = new Pool({
  host: 'localhost',
  database: 'westernboots',
  user: 'postgres',
  password: 'admin',
  port: 5432,
  // OTHER CONFIG
  poolSize: 10,
  // Time to keep a connection idle. Default is 10s
  idleTimeoutMillis: 10000,
  // Time to wait to obtain a connection from the pool. Default is 90s
  waitForAvailableConnectionTimeoutMillis: 90000,
  // Max time to connect to postgres. Default is 5s
  connectionTimeoutMillis: 5000,
});



async function CreateItem(title,description,price,image_url) {
    const connection = await pool.connect();
    try {
        const results = await connection.query(
          'INSERT INTO items (title,description,price,image_url) VALUES ($1,$2,$3,$4)', 
          [title,description,price,image_url]);
        if (results.rowCount === 1) {
          return true; // RETURNS TRUE IF THE INSERT IS SUCCESFULL
        }
      }catch(err){    
        console.log(err);
        return false; // FALSE IF IT IS UNSUCESSFUL
      } finally {
        await connection.release();
  }
};

