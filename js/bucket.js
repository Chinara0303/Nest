let basket = JSON.parse(localStorage.getItem("basket"));

for (let prod of basket) {
  let tbody = document.querySelector(".tbody");

  let tr = document.createElement("tr");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  let tdcheckbox = document.createElement("td");
  let tdicon = document.createElement("td");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdImg = document.createElement("td");
  let tdQuantity = document.createElement("td");
  let img = document.createElement("img");

  tdId.innerText = prod.id;
  tdName.innerText = prod.name;
  img.setAttribute("src", prod.img);
  tdImg.append(img);
  tdQuantity.innerText = prod.count;
  tdcheckbox.append(checkbox);
  tdicon.innerHTML = `<i class="fa-solid fa-trash-can remove"></i>`;

  tr.append(tdcheckbox, tdImg, tdName, tdQuantity, tdId, tdicon);
  tbody.append(tr);
}

let remove = document.querySelectorAll(".remove");
for (let icon of remove) {
  icon.addEventListener("click", function () {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id == icon.parentElement.previousElementSibling.innerText) {
        basket.splice(i, 1);
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
      }
    }
  });
}

message();
function message(){
  if(document.querySelector(".tbody").children.length == 0){
      let message = document.createElement("div");
      let msg = document.createElement("h2");
      msg.innerText = "Səbət boşdur...";
      message.append(msg);
      document.querySelector(".tbody").append(message)
  }
}


