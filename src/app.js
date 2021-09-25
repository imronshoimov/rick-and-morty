import process from "process";
import dotenv from "dotenv";
import { poolDemo } from "./lib/database.js";
import { DATA } from "./query.js";
import request from "./lib/fetch.js";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

dotenv.config({ path: ".env" });
const api = process.env.API;

poolDemo(DATA.create);

async function insertCharacters() {
    let response = await request(api);
    
    for(let item of response["results"]) {
        const name = item.name;
        const data = JSON.stringify(item);
        
        poolDemo(DATA.insert, name, data);
    }
    
    const api = response["info"].next;
    console.log(api);
    
    await request(api)
}

insertCharacters()









