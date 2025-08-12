// // let divs = document.querySelectorAll(".box");
// // divs[0].innertext="new valuse";
// // divs[1].innertext="new aksdjk";
// // divs[2].innertext="new kldjfslk";

// // let demo = document.querySelector("div")
// // console.log(demo);

// // let p = demo.setAttribute("class","newclass");
// // console.log(p);

// // demo.className = "newclass"; // same effect
// // console.log(demo.className); // "newclass"

// // let color = document.querySelectorAll("div");
// // console.log(color);

// // color[1].style.backgroundColor ="black";
// // color[0].style.fontSize ="39px";


// let button = document.createElement("button");

// console.log(button);

// button.innerText = "Click me!"
// button.style.backgroundColor = "red";
// button.style.color = "white";

// document.querySelector("body").prepend(button)



// let container = document.getElementById("container");

// // 2. Create a new element (node)
// let p = document.createElement("p");
// p.innerText = "I am a paragraph";

// let span = document.createElement("span");
// span.innerText = " (extra info)";
// span.style.color = "red";

// // 3. Use append() to add text, the paragraph, and the span together
// container.append("This is some text before the paragraph. ", p, span, " - and more text after!");

// let paraa = document.querySelector("p");
// console.log(paraa);
// paraa.append("dfdsfasfasdp")


// let light = document.querySelector("#mode");

// let currentmode = "light";
// light.addEventListener("click", () => {
//     if (currentmode === "light") {
//         currentmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currentmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currentmode)
// }
// );


let demo = document.querySelector("#mode");
console.log(demo);
let current = "light";

demo.addEventListener("click",()=>{
    if(current === "light"){
        current ="dark";
        document.querySelector("body").style.backgroundColor = "green";
}else{
    current="light";
     document.querySelector("body").style.backgroundColor = "yellow";
}
console.log(current)
})


let change = document.querySelector("#para");

change.addEventListener("mouseover", () => {
    change.style.backgroundColor = "red";
});

