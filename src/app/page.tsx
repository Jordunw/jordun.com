import Project from "./components/navbar/client/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* TITLE */}
      <div className="flex flex-col min-w-full items-center pt-[40%] h-screen">
        <div>
          <h1 className="text-8xl text-cwhite font-bold">
            Forest&apos;s Portfolio
          </h1>
        </div>
        <div className="py-10">
          <h3 className="text-2xl text-primarylight font-semibold">
            Software Developer
            <br />
            Drexel University - Philadelphia, PA
          </h3>
        </div>
        <div className="my-auto size-10 animate-bounce rounded-md bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
          <svg className="size-6 text-primarylight fill-none stroke-current">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        id="about"
        className="flex flex-col min-w-full items-center rounded-md"
      >
        <div className="pb-4">
          <h2 className="text-2xl text-cwhite font-semibold">About Me</h2>
        </div>
        <p className="text-lg text-cwhite max-w-3xl text-pretty">
          Computer Science Major @{" "}
          <a className="group relative" href="https://drexel.edu">
            Drexel
            <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out" />
          </a>{" "}
          (BSCS - 2027)
          <br /> Software Developer Co-op @{" "}
          <a className="group relative" href="https://nuuly.com">
            Nuuly
            <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out" />
          </a>{" "}
          (Sept 2024 - Mar 2025)
          <br />
          <br />
        </p>
        <p className="text-lg text-cwhite max-w-3xl"></p>
        <div className="py-8"></div>
      </div>
      {/* END ABOUT ME */}

      {/* PROJECTS */}
      <div
        id="projects"
        className="flex flex-col min-w-full items-center rounded-md"
      >
        <div className="pb-4">
          <h2 className="text-2xl text-cwhite font-semibold">
            Personal Projects
          </h2>
        </div>
        <Project git="synthesizer" title="Handmade Synthesizer" />
        <Project git="fmckinney-website" title="Personal Website" />
        <Project git="" title="More to come..." />
        {/* END PROJECTS */}
      </div>
    </div>
  );
}
