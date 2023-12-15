// const places = [
//   {
//     id: 0,
//     name: "Lorem ipsum dolor sit amet.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis eaque suscipit culpa nostrum ex veritatis accusantium. Provident, consequuntur enim.",
//     src: "img/1.jpg",
//   },
//   {
//     id: 1,
//     name: "Lorem ipsum dolor sit amet.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis eaque suscipit culpa nostrum ex veritatis accusantium. Provident, consequuntur enim.",
//     src: "img/2.jpg",
//   },
//   {
//     id: 2,
//     name: "Lorem ipsum dolor sit amet.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis eaque suscipit culpa nostrum ex veritatis accusantium. Provident, consequuntur enim.",
//     src: "img/3.jpg",
//   },
//   {
//     id: 3,
//     name: "Lorem ipsum dolor sit amet.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis eaque suscipit culpa nostrum ex veritatis accusantium. Provident, consequuntur enim.",
//     src: "img/4.jpg",
//   },
//   {
//     id: 4,
//     name: "Lorem ipsum dolor sit amet.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis eaque suscipit culpa nostrum ex veritatis accusantium. Provident, consequuntur enim.",
//     src: "img/5.jpg",
//   },
// ];

// let img = document.querySelectorAll(".imgs img");
// let box1 = document.getElementById("box");
// let textheder = document.querySelector(".text-heder");
// let textbox = document.querySelector(".text-box");

// console.log(img);
// img.forEach((image, index) => {
//   image.src = places[index].src;
//   image.addEventListener("click", function () {
//    box1.src=places[index].src;
//   });
// });
// box1.src=places[0].src;
// textheder.innerText = places[0].name;
//    textbox.innerText = places[0].description;

let fontsize = document.getElementById("font-size");
let font =document.getElementById("font");
let textaray = document.getElementById("textaray1");
let colorbackgrund =document.getElementById("color-backgrund");
let color = document.getElementById("color");
let left = document.getElementById("left")
let center = document.getElementById("center")
let right = document.getElementById("right");



function f1(e) {
    let value = e.value;
    textaray.style.fontSize= value +"px"
}
function f2(e) {
    if (textaray.style.fontWeight == "bold") {
        textaray.style.fontWeight ="normal"
        e.classList.remove("acttiv")
    } else {
        textaray.style.fontWeight = "bold"
        e.classList.add("acttiv")
    }
    
}

function f4(e) {
    let value=e.value
    textaray.style.color=value;
}
function f5(e) {
    textaray.style.textAlign = "left";
    
}
function f6(e) {
    textaray.style.textAlign = "center";

}
function f7(e) {
    textaray.style.textAlign = "right";
}

