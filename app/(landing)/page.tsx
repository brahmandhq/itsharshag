import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import { Experiences } from "@/components/Experience";
import PressVideos from "@/components/PressVideos";
import { Products } from "@/components/Products";
import { Blogs } from "@/components/Blogs";
import { WallOfLoveAndGratitude } from "@/components/WallOfLoveAndGratitude";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
const LandingPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <Spotlight
          className="-top-
           left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mx-auto max-w-7xl p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-grad from-black absolute -bottom-5 left-0"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <PressVideos />
        <Products />
        <Blogs />
        <WallOfLoveAndGratitude />
        <Experiences />
        <Socials />
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
