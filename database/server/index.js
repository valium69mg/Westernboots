import { Pool } from 'postgres-pool';

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

const connection = await pool.connect();
try {
    const results = await connection.query('SELECT * from items');
    console.log(results);
  } finally {
    // NOTE: You MUST call connection.release() to return the connection back to the pool
    await connection.release();
  }