function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function handleSearch(event) {
  event.preventDefault();

  const value = document.getElementById("searchInput").value.trim();

  if (value === "") {
    alert("Please enter something to search");
    return;
  }

  alert("You searched for: " + value);
}
