const containerElement = document.querySelector(".container");
const circleElement = document.querySelector(".circle");
const specialCircleElement = document.getElementById("special-circle");

// Task 2 - Print HTML elements

console.log("containerElement:", containerElement);
console.log("circleElement:", circleElement);
console.log("specialCircleElement:", specialCircleElement);

// Task 3 - Create the first event
// Task 4 - Check event properties
// Task 5 - Delete selected item
// Task 6 - Create delete-condition

containerElement.addEventListener("click", (e) => {
  console.log("container event:", e);
  console.log("container event-target:", e.target);
  console.log("container event-current-target:", e.currentTarget);

  if (e.target.className === "circle") {
    e.target.parentNode.removeChild(e.target);
  }
});

// Task 7 - Create the second event

specialCircleElement.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("specialCircleElement-event:", e);
  e.target.style = "background-color: green";
});
