import clientPromise from "@/lib/mongodb";
export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");
  const doc = await collection.findOne({ shorturl: body.shorturl });
  //   console.log(doc);
  console.log(body);
  if (doc && doc.url !== body.url) {
    // return Response.json({ status: 250, message: "short url already present" });
    return new Response(
      JSON.stringify({ message: "short url already exits" }),
      {
        status: 409,
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
  }
  //   if(collection){

  //   }
  if (!doc) {
    const res = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });
  }
  return new Response(
    JSON.stringify({ message: "url generated successfully" }),
    {
      status: 201,
      headers: {
        "Content-Type": "Application/json",
      },
    }
  );
  //   return Response.json({
  //     message: "url generated successfully",
  //     success: true,
  //   });
}

export async function GET(request) {}
