window.addEventListener("scroll", function () {
  const worksContents = document.querySelector(".works-contents");
  const worksContainer = document.querySelector(".works-container");
  const worksSpan = document.querySelector(".works-container > span");
  const rect = worksContents.getBoundingClientRect();
  const vh = window.innerHeight;

  const start = rect.top - vh;
  const totalScroll = rect.height - vh * 2;
  const scrolled = Math.min(Math.max(-start, 0), totalScroll); // 배경색 계산

  let bgValue = 248; // 초기값
  if (scrolled <= 0) {
    bgValue = 248;
    worksContainer.style.backgroundColor = `rgb(${bgValue},${bgValue},${bgValue})`;
  } else if (scrolled < 1 * vh) {
    const t = scrolled / (1 * vh);
    bgValue = Math.round(255 * (1 - t));
    worksContainer.style.backgroundColor = `rgb(${bgValue},${bgValue},${bgValue})`;
  } else if (scrolled < totalScroll - 1 * vh) {
    bgValue = 0;
    worksContainer.style.backgroundColor = "rgb(0,0,0)";
  } else if (scrolled < totalScroll) {
    const t = (scrolled - (totalScroll - 1 * vh)) / (1 * vh);
    bgValue = Math.round(255 * t);
    worksContainer.style.backgroundColor = `rgb(${bgValue},${bgValue},${bgValue})`;
  } else {
    bgValue = 248;
    worksContainer.style.backgroundColor = "rgb(248,248,244)";
  } // 텍스트 색상 반대로 적용 (bgValue = 0이면 255, bgValue=255면 0)

  const textColor = 255 - bgValue;
  if (worksSpan) {
    worksSpan.style.color = `rgb(${textColor},${textColor},${textColor})`;
  }
});
