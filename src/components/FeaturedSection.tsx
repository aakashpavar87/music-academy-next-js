"use client";
import Link from "next/link";
import musicData from "../data/musicData.json";
import GradientCard from "./GradientCard";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedSection() {
  const featuredCourses = musicData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-lg font-serif text-gray-200 mb-4">
            Featured Courses
          </h2>
          <p className="text-3xl font-semibold text-cyan-500">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {featuredCourses.map((course: Course, index: number) => (
            <div key={index} className="flex justify-center">
              <GradientCard
                title={course.title}
                description={course.description}
                slug={course.slug}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
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

export default FeaturedSection;
