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
        const ps = itemElem.querySelectorAll("div p");
        const spanText = span ? span.textContent.toLowerCase() : "";
        let pMatch = false;
        ps.forEach((p) => {
          if (p.textContent.toLowerCase().includes(keyword)) {
            pMatch = true;
          }
        });
        if (!keyword) return true;
        return spanText.includes(keyword) || pMatch;
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectBox = document.querySelector(".search-box .select");
  const subList = document.querySelector(".search-box .select .sub");
  const span = selectBox.querySelector("span");
  const subItems = subList.querySelectorAll("li");

  // select 박스 클릭 시 sub 리스트 표시/숨김
  selectBox.addEventListener("click", function (e) {
    e.stopPropagation();
    subList.style.display =
      subList.style.display === "block" ? "none" : "block";
  });

  // sub 리스트 항목 클릭 시 span 내용 변경
  subItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      span.textContent = item.textContent;
      subList.style.display = "none";
    });
  });

  // 바깥 클릭 시 sub 리스트 닫기
  document.addEventListener("click", function () {
    subList.style.display = "none";
  });
});

// 링크연결
document.querySelector("article.haeinjungsa").addEventListener("click", () => {
  window.location.href = "haeinjungsa.html";
});
document.querySelector("article.masan").addEventListener("click", () => {
  window.location.href = "masan.html";
});
document.querySelector("article.gosung").addEventListener("click", () => {
  window.location.href = "gosung.html";
});
document.querySelector("article.haeundae").addEventListener("click", () => {
  window.location.href = "haeundae.html";
});
document.querySelector("article.changwon").addEventListener("click", () => {
  window.location.href = "changwon.html";
});
