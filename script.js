const h1El = document.querySelector("h1");
const clearBtnEl = document.querySelector(".btn__clear");
const mainSection = document.querySelector(".main");
const inputYear = document.querySelector(".input__year");
const inputMonth = document.querySelector(".input__month");
const inputDay = document.querySelector(".input__day");
const inputHours = document.querySelector(".input__hours");
const inputMin = document.querySelector(".input__minutes");
const btnSubmit = document.querySelector(".btn__submit");
const overlay = document.querySelector(".overlay");

let year, month, day, hours, minutes;

btnSubmit.addEventListener("click", function () {
  h1El.textContent = "";
  if (
    inputYear.value.length != 0 &&
    inputMonth.value.length != 0 &&
    inputDay.value.length != 0 &&
    inputHours.value.length != 0 &&
    inputMin.value.length != 0
  ) {
    year = Number(inputYear.value);
    month = Number(inputMonth.value);
    day = Number(inputDay.value);
    hours = Number(inputHours.value);
    minutes = Number(inputMin.value);

    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    const dateTehran = new Intl.DateTimeFormat("en-IR", {
      dateStyle: "full",
      timeStyle: "full",
    }).format(date);

    h1El.textContent = dateTehran;
    overlay.classList.remove("hidden");
    h1El.classList.remove("hidden");
    mainSection.classList.add("hidden");
    clearBtnEl.classList.remove("hidden");
  } else alert("All fields must contain numbers!");
});

clearBtnEl.addEventListener("click", function () {
  clearBtnEl.classList.add("hidden");
  mainSection.classList.remove("hidden");
  h1El.classList.add("hidden");
  overlay.classList.add("hidden");

  inputYear.value = "";
  inputMonth.value = "";
  inputDay.value = "";
  inputHours.value = "";
  inputMin.value = "";
  h1El.textContent = "";
});
