import pkg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connectionString = process.env.DB_CONNECT;
console.log(connectionString);
const { Pool } = pkg;
const pool = new Pool({
    connectionString,
    ssl: true,
});

async function poolDemo (query, ...params) {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(query, params.length ? params : null);
        return rows;
    } catch(error) {
        console.log(error);
    } finally {
        client.release()
    }
};

export { poolDemo };