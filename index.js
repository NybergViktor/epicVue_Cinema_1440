function clickedSeats() {
  let seatsArr = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    seatsArr.push(checkboxes[i].id);
  }

  localStorage.setItem("seat-array", JSON.stringify(seatsArr));
}

document.addEventListener("DOMContentLoaded", function () {
  const myArray = JSON.parse(localStorage.getItem("seat-array"));

  const ul = document.getElementById("seat-boxes-container");

  myArray.forEach((element) => {
    const li = document.createElement("li");

    li.innerHTML = element;
    li.innerHTML = li.innerHTML.replace(/seat/g, "");
    ul.appendChild(li);
  });
});
