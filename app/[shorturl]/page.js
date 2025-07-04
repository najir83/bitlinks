import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongodb"; // <-- make sure you have this file set up
import URL from "@/models/shortUrl.js";

export default async function Page({ params }) {
  const shorturl = (await params).shorturl;
  await dbConnect();

  const doc = await URL.findOne({ shorturl: shorturl });
  // console.log(doc);
  if (doc) {
    redirect(`${doc.url}`);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My post : {shorturl}</div>;
}
