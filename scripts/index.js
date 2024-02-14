const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, World!';

const myButton = document.querySelector("button");

const changeNameButton = document.querySelector('button');
// document.querySelector("html").addEventListener("click", () => {
//   alert("I was poked!");
// })

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  console.log(myImage.getAttribute('src'));
  if (mySrc === 'images/1.png') {
    myImage.setAttribute('src', 'images/2.png');
  } else {
    myImage.setAttribute('src', 'images/1.png');
  }
};

function changeWelcomeMessage() {
  let yourName = "";
  while (yourName === "") {
    yourName = prompt('Please type in your name: ');
    if (yourName === "") {
      alert("Name cannot be blank!");
    }
  }
  localStorage.setItem('name', yourName);
  myHeading.textContent = `Hello, ${yourName}`;
}

// This code below executes immediately when the page is loaded, which is inappropriate

// if (!localStorage.getItem("name")) {
//   changeWelcomeMessage();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Hello, ${storedName}`;
// }

myButton.onclick = () => {
  changeWelcomeMessage();
}
