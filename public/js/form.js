// Need to finish

const reviewFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#rev-title").value.trim();
  const creator = document.querySelector("#rev-creator").value.trim();
  const medium = document.querySelector("item-type").value.trim();
  const review = document.querySelector("#rev-review").value.trim();
  const rating = document.querySelector("rating").value.trim();
  const year = document.querySelector("year").value.trim();

  if (title == "") {
    alert("Please enter the title of the work you wish to review.");
  } else if (!year) {
    alert("Please enter the year of the work.");
  } else if (!creator) {
    alert(
      "Please enter the creator of the work (i.e., author, director, artist)."
    );
  } else if (medium == "") {
    alert("Please select the medium type.");
  } else if (review == "") {
    alert("Please write a review.");
  } else if (rating == "") {
    alert("Please provide a rating.");
  } else if (title && creator && medium && review && rating) {
    const response = await fetch("/api/review ", {
      method: "POST",
      body: JSON.stringify({ title, creator, medium, review, rating }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.redirect("/viewItem");
    } else {
      alert("Failed to sign up.");
    }
  } else {
    alert("Failed to sign up.");
  }
};

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
