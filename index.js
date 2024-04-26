function clickedSeats() { //function that selects all checked buttons, puts in array, saves to localstorage
  let seatsArr = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    seatsArr.push(checkboxes[i].id);
  }

  localStorage.setItem("seat-array", JSON.stringify(seatsArr));
}

document.addEventListener("DOMContentLoaded", function () { //when loading confirmation page, this function gets alla items from localstorage and adds them to seat-boxes-container
  const myArray = JSON.parse(localStorage.getItem("seat-array"));

  const ul = document.getElementById("seat-boxes-container");

  myArray.forEach((element) => {
    const li = document.createElement("li");

    li.innerHTML = element;
    li.innerHTML = li.innerHTML.replace(/seat/g, ""); //removes seat in desktop and mobile in mobile, makes it look cleaner with less text.
    li.innerHTML = li.innerHTML.replace(/mobile-/g, "");
    ul.appendChild(li);
  });
});
