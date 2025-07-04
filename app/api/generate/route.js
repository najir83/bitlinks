// app/api/generate/route.js

import dbConnect from "@/lib/mongodb";
import URL from "@/models/shortUrl";

export async function POST(request) {
  try {
    await dbConnect();

    const { url, shorturl } = await request.json();

    if (!url || !shorturl) {
      return Response.json({ message: "Missing fields" }, { status: 400 });
    }

    // Check if shorturl already exists
    const existing = await URL.findOne({ shorturl });

    if (existing && existing.url !== url) {
      return Response.json({ message: "Short URL already exists" }, { status: 409 });
    }

    // If not found, create new entry
    if (!existing) {
      await URL.create({ url, shorturl });
    }

    return Response.json({ message: "Short URL created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error in /api/generate:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
