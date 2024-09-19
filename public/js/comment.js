// Haven't gotten to yet
document
  .querySelector(".review-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const review = document.querySelector('textarea[name="content"]').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const itemId = document.querySelector('input[name="itemId"]').value;

    const response = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify({
        review: review,
        rating: rating,
        item_id: itemId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      const data = await response.json();
      alert(data.message);
    }
  });
