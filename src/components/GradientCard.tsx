"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import musicImage from "./music-img.jpg";
import { title } from "process";
import Link from "next/link";

interface CardDetail {
  title: string;
  description: string;
  slug: string;
}

function GradientCard({ title, description, slug }: CardDetail) {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image src={musicImage} alt="music" className="object-fill  h-32" />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {title}
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <Link href={`${slug}`}>
        <button className="rounded-full pl-4 pr-1 py-1 md:p-4 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 md:p-2 text-white">
            Learn More
          </span>
        </button>
      </Link>
    </BackgroundGradient>
  );
}

export default GradientCard;
