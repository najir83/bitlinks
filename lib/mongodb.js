// lib/dbConnect.js
"use server"
import mongoose from 'mongoose';

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) return;

  console.log(process.env.MONGO_URL,process.env.NEXT_PUBLIC_HOST);
  if (!process.env.MONGO_URL) {
    throw new Error('MONGODB_URL is not defined');
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      dbName: 'bitlinks', // optional
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw new Error('MongoDB connection failed');
  }
}
