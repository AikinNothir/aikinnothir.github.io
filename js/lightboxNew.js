let currentIndex = 0;
let galleryItems = Array.from(
    document.querySelectorAll(".gallery a")
).filter(
    (link) => link.querySelector("img") || link.dataset.type === "video"
);

document.querySelectorAll("a[data-text]").forEach((link) => {
    const img = link.querySelector("img");
    if (img) {
        img.setAttribute("alt", link.getAttribute("data-text"));
    }
});

function createMedia(item) {
    const type = item.dataset.type || "image";

    if (type === "video") {
        const video = document.createElement("video");
        video.classList.add("mainImgClass");
        video.id = "imgModalu";
        video.src = item.href;
        video.controls = true;
        video.autoplay = true;
        video.loop = false;

        return video;
    }

    const img = document.createElement("img");
    img.classList.add("mainImgClass");
    img.id = "imgModalu";
    img.src = item.href;
    img.alt = item.dataset.text || "";

    return img;
    
}

function change(item) {
    item.classList.toggle("change");
}

function changeImg(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    const oldMedia = document.getElementById("imgModalu");
    const newMedia = createMedia(galleryItems[currentIndex]);

    oldMedia.replaceWith(newMedia);

    const popisObal = document.querySelector("#modalLightbox .popisek");

    if (popisObal) {
        popisObal.innerText =
            galleryItems[currentIndex].getAttribute("data-text") || "";
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

        let mainImg;

        if (clickedImg) {
            mainImg = createMedia(clickedImg);
        } else {
            mainImg = createMedia(galleryItems[currentIndex]);
        }

        const popisObal = document.createElement("p");
        popisObal.setAttribute("class", "popisek");

        const currentItem = clickedImg || galleryItems[currentIndex];
        popisObal.innerText = currentItem.getAttribute("data-text") || "";
        newDiv.appendChild(popisObal);

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

galleryItems.forEach((a, cisloPoradi) => {
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
