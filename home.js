function copyToClipboard(e, t, n, o) {
  var d = document.getElementById(e);
  if (d) {
    var l = document.createElement("input");
    (l.value = d.textContent),
      document.body.appendChild(l),
      l.select(),
      document.execCommand("copy"),
      document.body.removeChild(l);
    var c = document.getElementById(n),
      u = document.getElementById(o);
    c &&
      u &&
      ((u.style.display = "none"),
      (c.style.display = "inline"),
      setTimeout(function () {
        (c.style.display = "none"), (u.style.display = "inline");
      }, 2e3));
  } else console.error("Source element not found.");
}
function openPopup(e, t, n) {
  (document.getElementById("popup-img").src = e),
    (document.getElementById("popup-description").textContent = t),
    (document.getElementById("popup-heading").textContent = n),
    (document.getElementById("popup").style.display = "block"),
    (document.getElementById("popup-backdrop").style.display = "block");
}
function closePopup() {
  (document.getElementById("popup").style.display = "none"),
    (document.getElementById("popup-backdrop").style.display = "none");
}
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.addEventListener(
    "touchstart",
    function (e) {
      e.touches.length > 1 && e.preventDefault();
    },
    !1
  );
  var e = document.querySelector(".lb_header");
  window.addEventListener("scroll", function () {
    window.scrollY >= 100
      ? e.classList.add("fixed")
      : e.classList.remove("fixed");
  });
  var t = document.querySelector(".menuburger"),
    n = document.querySelector("nav");
  t &&
    n &&
    (t.addEventListener("click", function () {
      n.classList.toggle("open");
    }),
    n.querySelectorAll("a").forEach(function (e) {
      e.addEventListener("click", function () {
        n.classList.remove("open");
      });
    }));
}),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".menuburger"),
      t = document.querySelector(".lb_header nav"),
      n = document.querySelectorAll(".lb_header nav ul li a");
    e.addEventListener("click", function () {
      "none" === t.style.display || "" === t.style.display
        ? (t.style.display = "block")
        : (t.style.display = "none");
    }),
      n.forEach(function (e) {
        e.addEventListener("click", function () {
          t.style.display = "none";
        });
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lb_header nav ul li a").forEach((e) => {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        const t = this.getAttribute("href").substring(1),
          n = document.getElementById(t);
        window.scrollTo({ top: n.offsetTop, behavior: "smooth" });
      });
    });
  });
