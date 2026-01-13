const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  notification.className = "notification success";
  message.innerText = "✅ Success! Operation completed.";
}

function showError() {
  notification.className = "notification error";
  message.innerText = "❌ Error! Something went wrong.";
}

function hideNotification() {
  notification.classList.add("hidden");
}
