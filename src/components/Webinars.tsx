import Link from "next/link";
import React from "react";
import { HoveredCards } from "./HoveredCards";

function Webinars() {
  return (
    <div className="py-12 bg-gray-600">
      <div>
        <div className="text-center">
          <h2 className="text-lg font-serif text-gray-200 mb-4 tracking-wide">
            Featured Webinars
          </h2>
          <p className="text-3xl font-semibold text-cyan-500">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10 max-w-5xl mx-auto px-8">
        <HoveredCards />
      </div>
      <div className="mt-20 text-center">
        <Link href={"/webinars"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              All Courses
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Webinars;
