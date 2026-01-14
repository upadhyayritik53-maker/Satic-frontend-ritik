const form = document.getElementById("task8Form");
const input = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("errorMsg");

// Enable / Disable button on typing
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    submitBtn.disabled = true;
    errorMsg.style.display = "none";
    input.classList.remove("error");
  } else {
    submitBtn.disabled = false;
  }
});

// Prevent empty submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    errorMsg.style.display = "block";
    input.classList.add("error");
    submitBtn.disabled = true;
  } else {
    errorMsg.style.display = "none";
    input.classList.remove("error");

    alert("Form submitted successfully!");
    form.reset();
    submitBtn.disabled = true;
  }
});
