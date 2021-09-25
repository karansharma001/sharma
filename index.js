// Code for The menu button which will appear on scroll

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu").style.display = "flex";
  } else {
    document.getElementById("menu").style.display = "none";
  }
};

// Menu bar

const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("inside-menu");

open.onclick = function () {
  if (menu.style.right != "0px") {
    menu.style.right = "0px";
  }
};

close.onclick = function () {
  if (menu.style.right != "-200px") {
    menu.style.right = "-200px";
  }
};

// Elements appear on scroll

window.addEventListener("scroll", () => {
  var reveals = document.querySelectorAll(".reveals");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;

    var revealTop = reveals[i].getBoundingClientRect().top;

    // var revealPoint = 150;

    if (revealTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
