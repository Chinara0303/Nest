// information

var tabMenus = document.querySelectorAll(".tab-menu-heading");
var contents = document.querySelectorAll(".content");

for (var menu of tabMenus) {
  menu.addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    document.querySelector(".tab-menu .active").classList.remove("active");
    this.classList.add("active");
    
    for (let content of contents) {
      content.classList.add("d-none");
      if (content.getAttribute("data-index") === index) {
        content.classList.remove("d-none");
      }
    }
  });
}
