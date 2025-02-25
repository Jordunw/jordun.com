"use client";

// 勉強する
// 新しいの

import Link from "next/link";
import { HOMEPAGE, NAME } from "@/app/constants";
import { scrollToSection } from "@/utils";

const TitleHomeLink = () => {
  return (
    <Link href={HOMEPAGE} className="relative">
      {NAME}
      <span className="absolute left-0 -bottom-1 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
    </Link>
  );
};

const AboutLink = () => {
  return (
    <button onClick={() => scrollToSection("about")} className="relative group">
      About
      <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
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
      <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
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
      <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="text-cwhite px-48">
      <div className="py-4 flex items-center justify-between border-secondary max-w-5xl mx-auto">
        <div className="text-3xl font-semibold group">
          <TitleHomeLink />
        </div>
        <div className="flex space-x-4">
          <AboutLink />
          <ProjectsLink />
          <ResumeLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
