window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".works-container", // 고정시킬 요소
    start: "top top", // .works-container가 뷰포트 맨 위에 닿을 때 pin 시작
    end: "bottom+=100% top", // 섹션이 1화면 크기만큼 지나갈 때까지 pin
    pin: true, // 고정 활성화
    pinSpacing: true, // 이후 요소들과 겹치지 않음
    scrub: false, // 스크롤 연동 부드럽게 X, 바로 pin
  });
});

// works-container 영역에서만 작동하는 스크롤 효과
let skewSetter = gsap.quickTo(".works-contents > .item", "skewY"),
  clamp = gsap.utils.clamp(-30, 30);

// works-container 요소의 스크롤 이벤트 감지
let lastScrollTop = 0;
let ticking = false;

function updateSkew() {
  const worksInner = document.querySelector(".works-inner");
  const currentScrollTop = worksInner.scrollTop;
  const velocity = currentScrollTop - lastScrollTop;

  // skewY 효과 적용
  skewSetter(clamp(velocity / -1));

  lastScrollTop = currentScrollTop;
  ticking = false;
}

function requestSkewUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateSkew);
    ticking = true;
  }
}

// works-container의 스크롤 이벤트 리스너 추가
window.addEventListener("load", function () {
  const worksInner = document.querySelector(".works-inner");

  if (worksInner) {
    worksInner.addEventListener("scroll", requestSkewUpdate);

    // 스크롤이 멈추면 skew 초기화
    let scrollTimeout;
    worksInner.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        skewSetter(0);
      }, 150);
    });
  }
});
