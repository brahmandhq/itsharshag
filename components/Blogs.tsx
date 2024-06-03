import { cn } from "@/lib/utils";
import { HoverEffect } from "./ui/card-hover-effect";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export function Blogs() {
  return (
    <section id="blogs" className="py-8">
      <div className="mx-auto text-center">
        <h2
          className={cn(
            "text-4xl font-bold underline underline-offset-8 decoration-blue-500 ",
            montserrat.className
          )}
        >
          Featured Blogs
        </h2>
        <div className="max-w-6xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "ZFellows Experience",
    description:
      "My ZFellows Experience was life-changing. I can’t imagine how got into it. Just completely random Twitter surfing got me into it....",
    link: "https://www.itsharshag.com/zfellows-experience",
    imgSrc: "/blogImg1.jpg",
  },
  {
    title: "Essential Advice for Beginner Software Engineers (31 Mar’23)",
    description:
      "This advice is based on my 4 years of professional software engineering career and 8 years of hobbyist software engineering, and hundreds of conversations with engineers and folks in tech.....",
    link: "https://www.itsharshag.com/essential-advice-for-beginner-software-engineers-31-mar23",
    imgSrc: "/blogImg2.jpg",
  },
  {
    title: "Lessons I learned from my failed side project",
    description:
      "I worked on a side project for six months. Even though I failed with it, I learned a lot of valuable lessons from it. In this blog, I will share those with you. Hopefully, they will be useful in your journey too.....",
    link: "https://itsharshag.hashnode.dev/lessons-i-learned-from-my-failed-side-project",
    imgSrc: "/blogImg3.avif",
  },
  {
    title: "ZFellows Experience",
    description:
      "My ZFellows Experience was life-changing. I can’t imagine how got into it. Just completely random Twitter surfing got me into it....",
    link: "https://www.itsharshag.com/zfellows-experience",
    imgSrc: "/blogImg1.jpg",
  },
  {
    title: "ZFellows Experience",
    description:
      "My ZFellows Experience was life-changing. I can’t imagine how got into it. Just completely random Twitter surfing got me into it....",
    link: "https://www.itsharshag.com/zfellows-experience",
    imgSrc: "/blogImg1.jpg",
  },
  {
    title: "ZFellows Experience",
    description:
      "My ZFellows Experience was life-changing. I can’t imagine how got into it. Just completely random Twitter surfing got me into it....",
    link: "https://www.itsharshag.com/zfellows-experience",
    imgSrc: "/blogImg1.jpg",
  },
];
