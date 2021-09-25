import pkg from "pg";

const password = "62I8anq3cFq5GYh2u4Lh"
const connectionString = `postgres://candidate:${password}@rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net:6432/db1?ssl=true`;

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