import "./styles.css";

const els = document.querySelectorAll(".rect");

els.forEach(el => {
  el.addEventListener("click", e => {
    // e.stopImmediatePropagation();
    console.log("click");
  });
});
