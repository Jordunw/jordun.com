import Project from "./components/navbar/client/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
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
        <div className="my-auto size-10 animate-bounce rounded-md p-2 ring-1 bg-transparent ring-white/20">
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
        <p className="text-lg text-cwhite max-w-3xl text-left">
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
        <div className="py-8"></div>
      </div>
      {/* END ABOUT ME */}

      {/* Work experience */}
      <p className="text-2xl font-semibold text-cwhite max-w-3xl">
        Work Experience
      </p>
      <div className="flex flex-row space-x-4 py-8 max-w-3xl">
        <div className="flex-1 bg-primary p-6 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-in-out">
          <h3 className="text-xl text-cwhite font-semibold">
            Software Developer Co-op
          </h3>
          <p className="text-cwhite mt-2">
            Nuuly/URBN - Philadelphia
            <br />
            <i>Sept 2024 - Present</i>
          </p>
          <p className="text-cwhite mt-2">
            Backend development and maintenance of cloud-based web applications
            in Kotlin.
          </p>
        </div>
        <div className="flex-1 bg-primary p-6 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
          <h3 className="text-xl text-cwhite font-semibold">
            Software Developer
          </h3>
          <p className="text-cwhite mt-2">
            Apex Fintech Solutions - Philadelphia
            <br />
            <i>Sept 2023 - Sept 2024</i>
          </p>
          <p className="text-cwhite mt-2">
            Full stack development on tax and wealth applications in Java,
            PostgreSQL, and AngularJS.
          </p>
        </div>
      </div>
      <div className="py-8"></div>

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
