import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import imgSrc from "../public/my-photo.png";
import HeroImg from "./HeroImg";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section id="home" className="w-full pt-5 md:pt-24 lg:pt-10">
      <div className="space-y-10 xl:space-y-16 px-4 md:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="mt-10 md:mt-20 w-64 h-64 md:w-80 md:h-80 relative lg:col-span-1 mx-auto lg:mx-0">
            <HeroImg imgSrc={imgSrc} />
          </div>
          <div className="space-y-6 flex flex-col col-span-2 justify-center mt-10 lg:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center lg:text-left">
              <span className={montserrat.className}>I'm</span>
              <br />
              <span
                className={cn(
                  "underline underline-offset-8 decoration-blue-500",
                  montserrat.className
                )}
              >
                Harsh Agrawal
              </span>
              <br />
            </h1>
            <p className="text-center lg:text-left">
              I work on ideas that make a dent in the world.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              <div>
                <img
                  src="/book-cover-optimized.jpg"
                  className="w-[150px] md:w-[200px] h-auto"
                />
              </div>
              <div className="text-left lg:text-left">
                <p className="text-md text-gray-400 m-0 p-0">
                  Check out my book that covers my journey about:
                </p>
                <ul className="m-0 mb-4 pl-4 text-gray-400 list-disc">
                  <li>
                    Learning programming during high school and releasing video
                    games on Play Store
                  </li>
                  <li>Getting into NYU with a $100K scholarship</li>
                  <li>
                    Dropping out to work for a $10B+ tech company (Avalara) as
                    their youngest SWE
                  </li>
                  <li>Consulting remotely for US startups</li>
                  <li>
                    Building a DevTools startup and getting interest from Tier 1
                    VCs (a16z, Sequoia, etc.)
                  </li>
                  <li>and a lot more!</li>
                </ul>
                <Link
                  href="https://itsharshagrawal.gumroad.com/l/journey"
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="px-4 py-2 rounded-md">Explore</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
