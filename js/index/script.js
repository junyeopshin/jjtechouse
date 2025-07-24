window.addEventListener("scroll", function () {
  const worksContents = document.querySelector(".works-contents");
  const worksContainer = document.querySelector(".works-container");
  const rect = worksContents.getBoundingClientRect();
  const vh = window.innerHeight;

  const start = rect.top - vh;
  const totalScroll = rect.height - vh * 2;
  const scrolled = Math.min(Math.max(-start, 0), totalScroll);

  if (scrolled <= 0) {
    worksContainer.style.backgroundColor = "rgb(248,248,244)";
  } else if (scrolled < 1 * vh) {
    const t = scrolled / (1 * vh);
    const color = Math.round(255 * (1 - t));
    worksContainer.style.backgroundColor = `rgb(${color},${color},${color})`;
  } else if (scrolled < totalScroll - 1 * vh) {
    worksContainer.style.backgroundColor = "rgb(0,0,0)";
  } else if (scrolled < totalScroll) {
    const t = (scrolled - (totalScroll - 1 * vh)) / (1 * vh);
    const color = Math.round(255 * t);
    worksContainer.style.backgroundColor = `rgb(${color},${color},${color})`;
  } else {
    worksContainer.style.backgroundColor = "rgb(248,248,244)";
  }
});
