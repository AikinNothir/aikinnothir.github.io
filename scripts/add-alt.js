const fs = require("fs");
const path = require("path");
const glob = require("glob"); // použijeme glob.sync
const cheerio = require("cheerio");

const patterns = ["**/*.html", "**/*.htm", "**/*.php", "**/*.ejs", "**/*.md"];
const ignore = ["node_modules/**", ".git/**", "scripts/**"];

function guessAltFromSrc(src) {
  if (!src) return "image";
  if (src.startsWith("data:")) return "inline-image";
  const clean = src.split("?")[0].split("#")[0];
  const base = path.basename(clean);
  return base || "image";
}

let totalFiles = 0;
let totalImgs = 0;
let updatedImgs = 0;

patterns.forEach((pattern) => {
  const files = glob.sync(pattern, { ignore, nodir: true });
  files.forEach((file) => {
    const text = fs.readFileSync(file, "utf8");
    const $ = cheerio.load(text, { decodeEntities: false });
    const imgs = $("img").toArray();
    let changed = false;
    imgs.forEach((img) => {
      totalImgs++;
      const $img = $(img);
      if (typeof $img.attr("alt") === "undefined") {
        const src = $img.attr("src") || "";
        const alt = guessAltFromSrc(src);
        $img.attr("alt", alt);
        updatedImgs++;
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(file, $.html(), "utf8");
      totalFiles++;
      console.log(`Updated: ${file}`);
    }
  });
});

console.log(
  `Done. Files changed: ${totalFiles}, images scanned: ${totalImgs}, images updated: ${updatedImgs}`
);
