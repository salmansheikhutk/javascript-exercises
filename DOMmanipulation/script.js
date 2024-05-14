// your JavaScript file
const container = document.querySelector("#container");

const a = document.createElement("div");
// content.classList.add("content");
a.textContent = "This is the glorious text-content!";

container.appendChild(a);

// 
// p.textContent = "Hey I'm red!";
// container.appendChild(p)

const b = document.createElement("p");
b.style.color = "red"
b.textContent = "Hey I'm red!";

container.appendChild(b);

const c = document.createElement("h3");
c.style.color = "blue"
c.textContent = "I'm a blue h3!";

container.appendChild(c);

// part 3

const box = document.createElement("div")
box.classList.add("box")
box.style.height= "400px"
box.style.width = "400px"
box.style.background = "pink"
box.style.border = "black"

    // Inside it an h1
    const boxh1 = document.createElement("h1")
    boxh1.textContent = "I'm a div"

    // Inside it a p
    const boxp = document.createElement("p")
    boxp.textContent = "ME TOO!"

container.appendChild(box)

const container2 = document.querySelector(".box");
container2.appendChild(boxh1)
container2.appendChild(boxp)

// // Button: Method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// // Button: Method 3
// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", () => {
//   alert("Hello World");
// });

const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//     console.log(e);
//   });
  
btn.addEventListener("click", function (e) {
    e.target.style.background = "green";
  });
  
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
