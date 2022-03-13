$(function () {
  $(".header-center-info").slick({
    infinite: true,
    slideStoShow: 1,
    slideStoScroll: 1,
    speed: 300,
    autoplay: true,
    vertical: true,
    arrows: false,
  });
});

// scrolltop

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
      $('#scrollToTop').css({
          'opacity': '1',
          'visibility': 'visible'
      });
  } else {
      $('#scrollToTop').css({
          'opacity': '0',
          'visibility': 'hidden'
      });
  }
})

$('#scrollToTop').click(function () {
  $('html,body').animate({
      scrollTop: 0
  }, 900)
})


$(window).scroll(function () {
  var header = $('#navbar-comp'),
      scroll = $(window).scrollTop();

  if (scroll >= 150) {
      header.css({
          'position': 'fixed',
          'top': '0',
          'left': '0',
          'right': '0',
          'z-index': '99999'
      });
  } else {
      header.css({
          'position': 'relative'
      });
  }
});


// header fixed

$(window).scroll(function () {
  var header = $('#navbar-phone'),
    scroll = $(window).scrollTop();

  if (scroll >= 200) header.css({
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'right': '0',
    'box-shadow': '0 8px 20px 0 rgba(0, 0, 0, 0.05)',
    'z-index': '999',
    'background-color': '#fff'
  });
  else header.css({
    'position': 'relative',
    'box-shadow': 'none'
  });
});


// SIDEBAR
var iconx = document.querySelector(".iconx");
var icon = document.querySelector(".icon");
var overlay = document.querySelector(".overlay");
var downicon = document.querySelectorAll(".fa-angle-down");

icon.onclick = function () {
  var sidebar = document.querySelector(".content-area");
  sidebar.style.width = "80%";
  sidebar.style.visibility = "visible";
  sidebar.style.opacity = "1";
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
};
iconx.onclick = function () {
  var sidebar = document.querySelector(".content-area");
  sidebar.style.width = "0%";
  sidebar.style.visibility = "hidden";
  sidebar.style.opacity = "0";
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
};

for (let i = 0; i < downicon.length; i++) {
  downicon[i].addEventListener("click", function () {
    let dropdown = this.parentElement.parentElement.nextElementSibling;
    let activeUl = document.querySelectorAll(".activeul");
    for (let ul of activeUl) {
      if (dropdown === ul) {
        ul.classList.add("activeul");
      }
      ul.classList.remove("activeul");
    }
    dropdown.classList.toggle("activeul");
  });
}

// basket
if (JSON.parse(localStorage.getItem("basket")) == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

let btnAdd = document.querySelectorAll(".add-to-cart ");
for (let btn of btnAdd) {
  btn.onclick = function (e) {
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("basket")) == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let id =
      this.parentElement.parentElement.parentElement.getAttribute("data-id");
    let img =
      this.parentElement.parentElement.previousElementSibling.previousElementSibling
        .querySelector(".nozoom")
        .getAttribute("src");
    let name = this.parentElement.parentElement.querySelector("h2").innerText;
    let existProd = basket.find((p) => p.id == id);

    if (existProd === undefined) {
      basket.push({
        id: id,
        name: name,
        count: 1,
        img: img,
      });
    } else {
      existProd.count += 1;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    countBucket();
  };
}

function countBucket() {
  let bucket = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("productCount").innerText = bucket.length;
}




