import { MongoClient } from "mongodb";
import {MONGO_URI} from "$env/static/private";

const client = new MongoClient(MONGO_URI);


export function startMongo() {

    console.log("Starting mongo...");
    return client.connect();

}


export default client.db();