const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter something to search!");
    return;
  }

  result.textContent = `You searched for: "${value}"`;
});
