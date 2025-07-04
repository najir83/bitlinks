// app/api/generate/route.js

import dbConnect from "@/lib/mongodb"; // <-- make sure you have this file set up
import URL from "@/models/shortUrl.js";

export async function POST(request) {
  await dbConnect(); // connect to MongoDB using Mongoose

  const body = await request.json();

  const { url, shorturl } = body;
  // console.log(url, shorturl);

  if (!url || !shorturl) {
    return new Response(JSON.stringify({ message: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check if short URL already exists
  const existing = await URL.findOne({ shorturl });

  if (existing && existing.url !== url) {
    return new Response(
      JSON.stringify({ message: "Short URL already exists" }),
      {
        status: 409,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!existing) {
    await URL.create({ url, shorturl });
  }

  return new Response(
    JSON.stringify({ message: "URL generated successfully" }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
