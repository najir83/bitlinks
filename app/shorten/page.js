"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generate, setGenerate] = useState(false);
  const [showRandom, setShowRandom] = useState(1);
  const [generating, setGenerating] = useState(0);
  const generateUrl = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    if (!url || !shortUrl) {
      alert("All fields are required");
      return;
    }
    setGenerating(1);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        // alert(result.message);
        setGenerate(shortUrl);
        setGenerating(0);
        setUrl("");
        setShortUrl("");
        toast.success("Shorten url generated successfully", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) =>
        toast.error("Internal Server Error", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      );
  };
  const randomHandle = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setShortUrl(result);
  };
  return (
    <div className=" min-h-[73vh]">
      <div className=" lg:max-w-xl pb-7   mx-3  bg-purple-200 shadow-xl rounded-lg mt-30  lg:mx-auto gap-6 flex-col items-center flex  ">
        <h1 className="font-bold text-xl py-10">Generate Your Short URL </h1>
        <input
          className="lg:w-100 w-80 bg-white rounded-2xl p-2 outline-purple-400 lg:text-lg"
          value={url}
          placeholder="Enter your url"
          onChange={(e) => setUrl(e.target.value)}
        ></input>

        <input
          onFocus={() => setShowRandom(false)} // Hide "Random" when focused
          onBlur={() => setShowRandom(true)} // Show "Random" when unfocused
          className="lg:w-100 w-80 lg:pr-18 pr-21 bg-white rounded-2xl outline-purple-400 lg:text-lg p-2"
          value={shortUrl}
          placeholder="Enter your preferred short URL"
          onChange={(e) => setShortUrl(e.target.value)}
        />

        {showRandom && (
          <button
            onClick={randomHandle}
            className="absolute text-sm top-96 text-white font-semibold bg-purple-400 lg:h-[45px] h-[42px] lg:right-185 lg:top-[397px] cursor-pointer px-3 rounded-r-2xl rounded-l-4xl right-10"
          >
            Random
          </button>
        )}

        <button
          disabled={generating}
          onClick={generateUrl}
          className="bg-green-500 cursor-pointer py-3  hover:bg-green-600  hover:text-lg rounded-2xl px-10 text-white font-semibold m-3"
        >
          {generating ? "Generating..." : "Generate"}
        </button>

        {generate && (
          <div className="mt-4">
            Your short URL:&nbsp;
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_HOST}/${generate}`}
              className="text-blue-600 underline"
            >
              {`${process.env.NEXT_PUBLIC_HOST}/${generate}`}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
