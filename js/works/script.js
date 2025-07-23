// Isotope 콘텐츠 필터링
window.addEventListener("load", () => {
  const grid = new Isotope(".works-box", {
    itemSelector: "article",
    transitionDuration: "0.3s",
    masonry: { columnWidth: "article" },
  });

  const btns = document.querySelectorAll(".sorting > li");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const sort = btn.querySelector("a").getAttribute("href");
      grid.arrange({ filter: sort });

      btns.forEach((el) => el.classList.remove("on"));
      btn.classList.add("on");
    });
  });

  // 검색 버튼 기능 추가
  const searchInput = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const keyword = searchInput.value.trim().toLowerCase();

    grid.arrange({
      filter: function (itemElem) {
        const span = itemElem.querySelector("div span");
        if (!keyword) return true;
        return span && span.textContent.toLowerCase().includes(keyword);
      },
    });
  });
});

document.querySelector("article.haeinjungsa").addEventListener("click", () => {
  window.location.href = "haeinjungsa.html";
});
