import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-purple-100">
        <div className="flex flex-col gap-4 items-center justify-center px-4 py-8 md:px-8 text-center">
          <h1 className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </h1>
          <p className="text-sm md:text-base max-w-prose mx-auto px-4 md:px-0">
            We are the most straightforward URL Shortener in the world. Most URL shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-center'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white text-sm md:text-base'>
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white text-sm md:text-base'>
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-full">
          <Image 
            className="mix-blend-darken w-full object-cover" 
            alt="an Image of a vector" 
            src="/vector.jpg" 
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    
  );
}