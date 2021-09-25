import process from "process";
import dotenv from "dotenv";
import { poolDemo } from "./lib/database.js";
import { DATA } from "./query.js";
import request from "./lib/fetch.js";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

dotenv.config({ path: ".env" });
const api = process.env.API;

poolDemo(DATA.create);

async function insertCharacters(url) {
    let response = await request(url);

    for(let item of response["results"]) {
        const name = item.name;
        const data = JSON.stringify(item);
        
        const returnedData = await poolDemo(DATA.insert, name, data);
        
        console.log(await returnedData);
    }
}

async function createTable(url) {
    let response = await request(url);
    
    await insertCharacters(url);  

    for(let i = 2; i <= response["info"].pages; i++) {
        await insertCharacters(url + `?page=${i}`); 
    }
}

createTable(api);









