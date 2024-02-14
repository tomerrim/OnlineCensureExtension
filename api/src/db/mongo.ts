import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = "mongodb+srv://shmuel:dkLtpzj30rEsBm5r@censure-extension.cktgnej.mongodb.net/";
// const url = `mongodb+srv://shmuel:dkLtpzj30rEsBm5r@censure-app.shpat5g.mongodb.net/`;

let db: MongoClient;

async function connectToMongoDB() {
    await MongoClient.connect(mongoUrl).then((val) => {
        db = val;
    }).catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
        return;
    });
    console.log('Connected to MongoDB');
}

async function closeMongoDBConnection() {
    try {
        await db.close();
        console.log('Closed MongoDB connection');
    } catch (error) {
        console.error('Error closing MongoDB connection: ', error);
    }
}




export { db, connectToMongoDB, closeMongoDBConnection };
