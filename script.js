function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function handleSearch(e) {
  e.preventDefault();
  const value = document.getElementById("search").value.trim();

  if (value === "") {
    alert("Please enter a search term");
    return;
  }

  alert("Searching for: " + value);
}
