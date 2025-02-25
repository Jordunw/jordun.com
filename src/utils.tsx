export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    setTimeout(() => {
      window.location.hash = `#${id}`;
      element.classList.add("animate-flash");
      setTimeout(() => {
        element.classList.remove("animate-flash");
      }, 2000);
    }, 250);
  }
};
