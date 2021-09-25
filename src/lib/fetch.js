import fetch from 'node-fetch';

async function request(api) {
    const response = await fetch(api);
    const data = await response.json();
    return await data;
}

export default request;