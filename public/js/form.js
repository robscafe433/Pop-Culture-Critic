// Need to finish

const reviewFormHandler = async (event) => {
  event.preventDefault();

  const item_name = document.querySelector("#rev-title").value.trim();
  const year = document.querySelector("#year").value.trim();
  const creator = document.querySelector("#rev-creator").value.trim();
  const type = document
    .querySelector("input[name='item-type']:checked")
    ?.value.trim();
  const review = document.querySelector("#rev-review").value.trim();
  const rating = document
    .querySelector("input[name='rating']:checked")
    ?.value.trim();

  if (item_name == "") {
    alert("Please enter the title of the work you wish to review.");
  } else if (year == "") {
    alert("Please enter the year of the work.");
  } else if (creator == "") {
    alert(
      "Please enter the creator of the work (i.e., author, director, artist)."
    );
  } else if (type == "") {
    alert("Please select the medium type.");
  } else if (review == "") {
    alert("Please write a review.");
  } else if (rating == "") {
    alert("Please provide a rating.");
  } else if (item_name && year && creator && type && review && rating) {
    try {
      // verify it exists in the database
      const first = await fetch(`/api/item/${item_name}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (first.ok) {
        const itemData = await first.json();

        if (itemData) {
          // the item already exists

          // post the review
          const addReview = await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({
              review: review,
              rating: rating,
              item_id: itemData.id,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (addReview.ok) {
            document.location.replace(`/view/${itemData.item_name}`);
          } else {
            alert("Error: Could not post review.");
          }
        } else {
          // the item doesn't exist
          console.log("Current item does not exist.");

          // create new item
          const second = await fetch("/api/item", {
            method: "POST",
            body: JSON.stringify({
              item_name: item_name,
              year: year,
              creator: creator,
              type: type,
              submittedBy: "Phil",
            }),
            headers: { "Content-Type": "application/json" },
          });

          console.log(second);

          if (second.ok) {
            // the item exists now
            const third = await fetch(`/api/item/${item_name}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });

            if (third.ok) {
              const itemData = await third.json();

              console.log(itemData);

              if (itemData) {
                // post the review
                const addReview = await fetch("/api/review", {
                  method: "POST",
                  body: JSON.stringify({
                    review: review,
                    rating: rating,
                    item_id: itemData.id,
                  }),
                  headers: { "Content-Type": "application/json" },
                });

                if (addReview.ok) {
                  document.location.replace(`/view/${itemData.item_name}`);
                } else {
                  alert("Error: Could not post review.");
                }
              } else {
                console.log("Error: Third item data is null");
              }
            } else {
              console.log("Error: Could not post item three");
            }
          } else {
            console.log("Error: Could not post item two");
          }
        }
      } else {
        console.log("Error: Could not get item one");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Failed to sign up.");
  }
};

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
