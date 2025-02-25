"use client";

// 勉強する
// 新しいの

import Link from "next/link";
import { HOMEPAGE, NAME } from "@/app/constants";
import { scrollToSection, LinkHoverAnimation } from "@/utils";

const TitleHomeLink = () => {
  return (
    <Link href={HOMEPAGE} className="relative">
      {NAME}
      {/* custom styling for this */}
      <span className="absolute left-0 -bottom-1 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
    </Link>
  );
};

const AboutLink = () => {
  return (
    <button onClick={() => scrollToSection("about")} className="relative group">
      About
      <LinkHoverAnimation />
    </button>
  );
};

const ProjectsLink = () => {
  return (
    <button
      onClick={() => scrollToSection("projects")}
      className="relative group"
    >
      Projects
      <LinkHoverAnimation />
    </button>
  );
};

const ExperienceLink = () => {
  return (
    <button
      onClick={() => scrollToSection("experience")}
      className="relative group"
    >
      Experience
      <LinkHoverAnimation />
    </button>
  );
};

const ResumeLink = () => {
  return (
    <Link
      href="/Forest_McKinney_Resume_2025.pdf"
      className="relative group"
      target="_blank"
    >
      Resume
      <LinkHoverAnimation />
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="text-cwhite mx-[5vw]">
      <div className="py-4 flex items-center justify-between border-secondary max-w-5xl mx-auto">
        <div className="md:lg:text-3xl text-xl font-semibold group text-nowrap">
          <TitleHomeLink />
        </div>
        <div className="md:lg:text-base text-sm flex space-x-4">
          <AboutLink />
          <ExperienceLink />
          <ProjectsLink />
          <ResumeLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
