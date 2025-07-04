import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Recommended for MongoDB drivers >=3.2
};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("⚠️ Please add MONGO_URL to your .env.local file");
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the value
  // is preserved across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client per request
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

export default clientPromise;
  