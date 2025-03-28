import Project from "./components/navbar/client/projects";
import { LinkHoverAnimation } from "@/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      {/* TITLE */}
      <div className="flex flex-col min-w-full items-center align-middle h-screen py-[25vh] overflow-hidden">
        <div>
          <h1 className="md:lg:text-7xl text-4xl text-cwhite font-bold text-nowrap overflow-hidden">
            Forest&apos;s Portfolio
          </h1>
        </div>
        <div className="py-10">
          <h3 className="md:lg:text-2xl text-sm text-primarylight font-semibold overflow-hidden">
            Software Developer
            <br />
            Drexel University - Philadelphia, PA
          </h3>
        </div>
        <div className="mt-auto md:lg:mb-0 mb-4 size-10 animate-bounce rounded-md p-2 ring-1 bg-transparent ring-white/20">
          <svg className="size-6 text-primarylight fill-none stroke-current">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        id="about"
        className="flex flex-col min-w-full items-center rounded-md pt-4"
      >
        <div className="pb-4">
          <h2 className="text-2xl text-cwhite font-semibold">About Me</h2>
        </div>
        <p className="md:lg:text-lg text-sm text-cwhite md:lg:max-w-3xl max-w-sm text-pretty">
          Computer Science Major @{" "}
          <a className="group relative" href="https://drexel.edu">
            Drexel
            <LinkHoverAnimation />
          </a>{" "}
          (BSCS - 2027)
          <br /> Software Developer Co-op @{" "}
          <a className="group relative" href="https://nuuly.com">
            Nuuly
            <LinkHoverAnimation />
          </a>{" "}
          (Sept 2024 - Mar 2025)
          <br />
          <br />
        </p>
        <div className="py-8"></div>
      </div>
      {/* END ABOUT ME */}

      {/* Work experience */}
      <div
        id="experience"
        className="flex flex-col min-w-full items-center rounded-md pt-4"
      >
        <p className="text-2xl font-semibold text-cwhite max-w-3xl">
          Work Experience
        </p>
        <div className="flex flex-row space-x-4 py-8 max-w-3xl">
          <div className="flex-1 bg-primary p-6 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-in-out">
            <h3 className="md:lg:text-xl text-lg text-cwhite font-semibold">
              Software Developer Co-op
            </h3>
            <p className="md:lg:text-sm text-xs text-cwhite mt-2">
              Nuuly/URBN - Philadelphia, PA
              <br />
              <i>Sept 2024 - Present</i>
            </p>
            <p className="text-cwhite mt-2">
              Backend development and maintenance of cloud-based web
              applications in Kotlin.
            </p>
          </div>
          <div className="flex-1 bg-primary p-6 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <h3 className="md:lg:text-xl text-lg text-cwhite font-semibold">
              Software Developer
            </h3>
            <p className="md:lg:text-sm text-xs text-cwhite mt-2">
              Apex Fintech Solutions - Philadelphia, PA
              <br />
              <i>Sept 2023 - Sept 2024</i>
            </p>
            <p className="text-cwhite mt-2">
              Full stack development on tax and wealth applications in Java,
              PostgreSQL, and AngularJS.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8"></div>

      {/* PROJECTS */}
      <div
        id="projects"
        className="flex flex-col min-w-full items-center rounded-md py-4"
      >
        <div className="pb-4">
          <h2 className="text-2xl text-cwhite font-semibold">
            Personal Projects
          </h2>
        </div>
        <Project git="synthesizer" title="Handmade Synthesizer" />
        <Project git="jordun.com" title="Personal Website" />
        <Project git="" title="More to come..." />
        {/* END PROJECTS */}
      </div>
    </div>
  );
}
