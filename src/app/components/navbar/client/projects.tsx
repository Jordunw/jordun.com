"use client";

import { GITHUB } from "@/app/constants";

interface ProjectProps {
  git: string;
  title: string;
  //   desc: string;
  //   skills: [string];
}

const Project: React.FC<ProjectProps> = ({ git, title }) => {
  return (
    <div className="group py-2">
      <div className="md:lg:max-w-3xl max-w-[12rem] md:lg:min-w-[48rem] min-w-[24rem] max-h-48 rounded-lg border-2 border-secondary shadow-lg overflow-hidden relative">
        <div className="flex h-full">
          {/* left half header */}
          <div className="flex-1 flex items-center px-6 w-[70%]">
            <h3 className="text-lg text-cwhite text-nowrap font-semibold text-ellipsis overflow-hidden">
              {title}
            </h3>
          </div>
          {/* right half */}
          <div
            className="flex flex-col items-center w-[30%] py-3 px-3 h-full bg-gradient-to-r from-primarygradient to-primarygradient2 hover:from-primary hover:to-primarylight cursor-pointer justify-center"
            onClick={() => window.open(GITHUB + git, "_blank")}
          >
            <span className="text-white font-semibold opacity-80">
              View on GitHub &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
