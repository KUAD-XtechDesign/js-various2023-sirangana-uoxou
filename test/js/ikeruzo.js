

document.addEventListener("DOMContentLoaded", function () {
    const loadingArea = document.querySelector(".loading-area");
    const mainContent = document.querySelector(".main-content");
  
    // 3秒後にローディング画面を非表示にしてメインコンテンツを表示する
    setTimeout(function () {
        loadingArea.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 3000);
  });
  