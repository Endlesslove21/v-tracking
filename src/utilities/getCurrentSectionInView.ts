function getCurrentSectionInView() {
  const sections = document.querySelectorAll("section[id]"); // Get all div elements with an "id" attribute
  const scrollPosition = window.scrollY + 100; // Adjust for any fixed headers or navigation bars

  for (const section of sections) {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionBottom = sectionTop + (section as HTMLElement).clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      return section.id;
    }
  }

  return null; // Return null if no section is in view
}

export default getCurrentSectionInView;
