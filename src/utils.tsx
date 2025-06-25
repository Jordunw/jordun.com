// reenable flash effect by flipping default value
export const scrollToSection = (id: string, flash = false) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      inline: "start",
      behavior: "smooth",
    });
    if(!flash) return;
    setTimeout(() => {
      window.location.hash = `#${id}`;
      element.classList.add("animate-flash");
      setTimeout(() => {
        element.classList.remove("animate-flash");
      }, 2000);
    }, 250);
  }
};

export const LinkHoverAnimation = () => {
  return (
    <span className="absolute left-0 block h-0.5 bg-primarylight w-0 transition-all duration-300 group-hover:w-full ease-out"></span>
  );
};
