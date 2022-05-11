let buttonsebet = document.querySelectorAll(".btnsebet");
let fruitbox = document.querySelector(".fruit-box");
let basketbox = document.querySelector(".basket-box");
let totalPRICE = document.querySelector(".totalPrice");
let fruitname = document.querySelector(".fruit-name");

buttonsebet.forEach(x => {
    x.addEventListener("click", function() {
        if (x.getAttribute("data-target") == "sebet") {
            fruitbox.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "hesabla") {
            totalPRICE.classList.remove("hide");
        }
    })
})

let fruitType = null;
let totalPrice = 0.00;

let alma1 = document.querySelector(".alma1");
let alma2 = document.querySelector(".alma2");
let alma3 = document.querySelector(".alma3");
let dragItem;
alma1.ondragstart = function() {
    dragItem = this;
}
alma2.ondragstart = function() {
    dragItem = this;
}
alma3.ondragstart = function() {
    dragItem = this;
}

let armud1 = document.querySelector(".armud1");
let armud2 = document.querySelector(".armud2");
let armud3 = document.querySelector(".armud3");

armud1.ondragstart = function() {
    dragItem = this;
}
armud2.ondragstart = function() {
    dragItem = this;
}
armud3.ondragstart = function() {
    dragItem = this;
}

let ciyelek1 = document.querySelector(".ciyelek1");
let ciyelek2 = document.querySelector(".ciyelek2");
let ciyelek3 = document.querySelector(".ciyelek3");

ciyelek1.ondragstart = function() {
    dragItem = this;
}
ciyelek2.ondragstart = function() {
    dragItem = this;
}
ciyelek3.ondragstart = function() {
    dragItem = this;
}

basketbox.ondragover = function(e) {
    e.preventDefault();
}

basketbox.ondrop = function() {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPRICE.classList.add("hide")
        basketbox.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id");
        totalPrice += Number(dragItem.children[2].children[0].textContent.split(":")[1])
        totalPRICE.textContent = " Ümumi məbləğ: " + totalPrice + " "
        fruitname.textContent = fruitType

    }
}
