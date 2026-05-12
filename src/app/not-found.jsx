"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center py-10 justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      
      <div className="text-center max-w-md animate-fade-in">

        <h1 className="text-[120px] font-extrabold leading-none text-yellow-400 drop-shadow-lg">
          404
        </h1>

        
        <h2 className="text-2xl font-semibold mt-2">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 mt-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

      
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition duration-300 shadow-lg">
            Go Back Home
          </button>
        </Link>

    
       

      </div>
    </div>
  );
}