import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className=" bg-white text-gray-800 px-6 min-h-[86vh] py-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About BitLinks</h1>

        <p className="text-lg mb-6">
          <strong>BitLinks</strong> is a fast, simple, and reliable URL shortener that helps you transform long, messy links into clean, shareable short URLs.
          Whether you're sharing on social media, embedding in documents, or tracking click performance — BitLinks makes it effortless.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-2">🚀 Features</h2>
        <ul className="list-disc list-inside mb-6 text-base space-y-1">
          <li>Create custom or random short URLs</li>
          <li>Track link clicks and analytics (coming soon)</li>
          <li>No login required – free and open to all</li>
          <li>Mobile responsive and lightning fast</li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-500 mb-2">🔧 How It Works</h2>
        <p className="mb-6 text-base">
          Enter your long URL, choose a custom alias (optional), and generate a short link instantly. Share your BitLink anywhere you like —
          it’ll redirect users to the original destination.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-2">💡 Why BitLinks?</h2>
        <p className="mb-6 text-base">
          BitLinks is designed with simplicity in mind. No ads. No tracking unless you want it. Just clean, fast, and reliable redirection.
          It’s ideal for students, professionals, marketers, and anyone who wants to simplify links.
        </p>

        <div className="mt-8">
          <Link href="/shorten">
            <button className="bg-purple-500 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-purple-600 transition">
              Try BitLinks Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
