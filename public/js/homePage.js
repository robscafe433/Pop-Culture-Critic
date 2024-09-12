// Need to fix bug

const writeReviewHandler = async (event) => {
  event.preventDefault();

  if (loggedIn) {
    document.location.replace("/form");
  } else {
    alert("Login or signup first!");
  }
};

const searchBarHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#content").value.trim();

  if (title) {
    await fetch(`/api/item/${title}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  } else {
    alert("Please enter a title.");
  }
};

document
  .querySelector("#review-btn")
  .addEventListener("click", writeReviewHandler);

document
  .querySelector("#search-btn")
  .addEventListener("click", searchBarHandler);
