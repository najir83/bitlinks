import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
// import { Poppins } from "next/font/google";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  // weight: "100 900",
});
export default function Home() {
  return (
    <main className=" bg-purple-100  overflow-auto ">
      <section className="grid lg:grid-cols-2 grid-rows-2">
        <div className=" h-[50vh] flex flex-col w-full  justify-center items-center">
          <p className={`text-xl font-bold  ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className=" text-lg lg:px-50 px-4 py-2 w-full">
            We are the most straight forword URL shortener in the world , Paste
            your long URL into the input box , Click the "Shorten It!" button to
            generate a short link.
          </p>
          <div className="gap-4 flex p-4">
            <Link href="/generate">
              <button className="bg-sky-400 px-2 py-1 cursor-pointer font-bold rounded-2xl">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="bg-sky-400 px-2 py-1 font-bold cursor-pointer rounded-2xl">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative">
          <Image
            src={"/vector.jpg"}
            className="mix-blend-darken"
            fill={true}
            alt="Image of a vector"
          />
        </div>
      </section>
    </main>
  );
}
