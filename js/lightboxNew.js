let currentIndex = 0;
let galleryImgs = [];
galleryImgs = Array.from(document.querySelectorAll(".gallery a")).filter(
  (link) => link.querySelector("img"),
);

document.querySelectorAll("a[data-text]").forEach((link) => {
  const img = link.querySelector("img");
  if (img) {
    img.setAttribute("alt", link.getAttribute("data-text"));
  }
});

function change(item) {
  item.classList.toggle("change");
}

function changeImg(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = galleryImgs.length - 1; // loop zpět na poslední
  } else if (currentIndex >= galleryImgs.length) {
    currentIndex = 0; // loop zpět na první
  }
  document.getElementById("imgModalu").src = galleryImgs[currentIndex].href;
  document.getElementById("imgModalu").alt = galleryImgs[currentIndex].href;
  const popisObal = document.querySelector("#modalLightbox .popisek");
  if (popisObal) {
    popisObal.innerText = galleryImgs[currentIndex].getAttribute("data-text");
  }

  console.log(currentIndex);
}

function initiateGall(clickedImg) {
  if (document.getElementById("Ini").classList.contains("change")) {
    document.getElementById("modalLightbox").remove();
    document.getElementById("Ini").innerHTML = "";
  } else {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "modalLightbox");
    document.body.appendChild(newDiv);

    const mainImg = document.createElement("img");
    mainImg.setAttribute("class", "mainImgClass");
    mainImg.setAttribute("id", "imgModalu");

    const popisObal = document.createElement("p");
    popisObal.setAttribute("class", "popisek");
    newDiv.appendChild(popisObal);

    if (clickedImg) {
      mainImg.setAttribute("src", clickedImg.href);
      mainImg.setAttribute("alt", clickedImg.href);
      popisObal.innerText = clickedImg.getAttribute("data-text");
    }

    newDiv.appendChild(mainImg);
    const bar1 = document.createElement("div");
    bar1.setAttribute("class", "bar1");
    const bar2 = document.createElement("div");
    bar2.setAttribute("class", "bar2");
    const bar3 = document.createElement("div");
    bar3.setAttribute("class", "bar3");
    document.getElementById("Ini").appendChild(bar1);
    document.getElementById("Ini").appendChild(bar2);
    document.getElementById("Ini").appendChild(bar3);

    const prevBtn = document.createElement("span");
    prevBtn.classList.add("prev");
    prevBtn.innerHTML = "&#10094;"; // levá šipka
    newDiv.appendChild(prevBtn);

    const nextBtn = document.createElement("span");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = "&#10095;"; // pravá šipka
    newDiv.appendChild(nextBtn);

    // kliknutí na šipky
    prevBtn.addEventListener("click", () => changeImg(-1));
    nextBtn.addEventListener("click", () => changeImg(1));
    document.getElementById("modalLightbox").addEventListener("click", (c) => {
      if (c.target.id === "modalLightbox") {
        initiateGall();
        change(document.getElementById("Ini"));
      }
    });
  }
}

window.addEventListener("keydown", logKey);
function logKey(e) {
  if (document.getElementById("Ini").classList.contains("change")) {
    if (e.code === "ArrowLeft") {
      changeImg(-1);
    } else if (e.code === "ArrowRight") {
      changeImg(1);
    } else if (e.code === "Space") {
      changeImg(1);
    } else if (e.code === "Escape") {
      initiateGall();
      change(document.getElementById("Ini"));
    }
  }
}

galleryImgs.forEach((a, cisloPoradi) => {
  a.addEventListener("click", (f) => {
    f.preventDefault();
    currentIndex = cisloPoradi;
    initiateGall(a);
    change(document.getElementById("Ini"));
    console.log(currentIndex);
  });
});

document.getElementById("Ini").addEventListener("click", () => {
  initiateGall();
  change(document.getElementById("Ini"));
});

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
  );
}

console.log(getWidth());
if (getWidth() >= 1200) {
  document.getElementById("player").innerHTML =
    '<iframe data-testid="embed-iframe" class="br12" src="https://open.spotify.com/embed/playlist/3XQugI7y1syceNQmEtfUyh?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
}
