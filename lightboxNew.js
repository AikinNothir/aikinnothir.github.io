let currentIndex = 0; 
let galleryImgs = [];

function change(item) {
    item.classList.toggle("change");
}

function initiateGall(clickedImg) {
    galleryImgs = Array.from(document.querySelectorAll('#gallery img'));

    if (document.getElementById("Ini").classList.contains("change")) {
        document.getElementById("modalLightbox").remove();
        document.getElementById("Ini").innerHTML = "";
        }
    else {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "modalLightbox");
            document.body.appendChild(newDiv);

            const mainImg = document.createElement("img");
            mainImg.setAttribute("class", "mainImgClass");
            mainImg.setAttribute('id', 'imgModalu');

            if (clickedImg) {
                mainImg.setAttribute('src', clickedImg.src)
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
    }
}

function changeImg(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = galleryImgs.length - 1; // loop zpět na poslední
    } else if (currentIndex >= galleryImgs.length) {
        currentIndex = 0; // loop zpět na první
    }
    document.getElementById("imgModalu").src = galleryImgs[currentIndex].src;
}   

window.addEventListener("keydown", logKey);

function logKey(e) { 
  if (document.getElementById("Ini").classList.contains("change")) {
      if (e.code === "ArrowLeft") {
      changeImg(-1)
    }
    else if (e.code === "ArrowRight") {
      changeImg(1)
    } 
    else if (e.code === "Escape") {
        initiateGall(); 
        change(document.getElementById('Ini'));
    }
  }
}

    document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
    initiateGall(img);
    change(document.getElementById('Ini'));
    });
    });

    document.getElementById('Ini').addEventListener('click', () => {
    initiateGall();
    change(document.getElementById('Ini'));
    });