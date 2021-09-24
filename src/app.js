// import fetch from 'node-fetch';
import pkg from 'pg';
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const connectionString = process.env.DB_CONNECT;
const api = process.env.API;

const { Pool } = pkg;
const pool = new Pool({
    connectionString
});

async function fetch () {
    const client = await pool.connect()
    try {
        const { rows } = await client.query("select now()");
        return rows;
    } catch(error) {
        console.log(error);
    } finally {
        client.release()
    }
};

fetch()


// async function request() {
//     const response = await fetch(api);
//     const data = await response.json();
//     console.log(data)
// }



