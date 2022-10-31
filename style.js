let emojis = document.getElementById("icons");

let isShow = true;
function lukkaChuppi() {
  if (isShow) {
    emojis.style.display = "none";
    isShow = false;
  } else {
    emojis.style.display = "block";
    isShow = true;
  }
}
