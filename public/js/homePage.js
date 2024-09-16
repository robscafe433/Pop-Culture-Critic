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

  const title = document.querySelector("#search-title").value.trim();

  if (title) {
    const response = await fetch(`/view/${title}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/view/${title}`);
    } else {
      alert("Reviews for this title doesn't exist. Add a new review!");
      document.location.replace(`/form`);
    }

    //   if (response.ok) {
    //     document.location.replace("/viewItem", {
    //       response,
    //       loggedIn: req.session.loggedIn,
    //     });
    //     // await fetch(`/api/item/view/${response}`, {
    //     //   method: "GET",
    //     //   headers: { "Content-Type": "application/json" },
    //     // });
    //     //   return;
    //     //   // if (nextResponse.ok) {
    //     //   //   document.location.redirect("/viewItem");
    //     //   // } else {
    //     //   //   alert("Error finding title");
    //     //   //   document.location.redirect("/");
    //     //   // }
    //     // } else {
    //     //   alert("Could not find title");
    //     //   document.location.redirect("/");
    //   }
  } else {
    alert("Please enter a title.");
  }
};

// document
//   .querySelector(".review-btn")
//   .addEventListener("click", writeReviewHandler);

document
  .querySelector(".search-form")
  .addEventListener("submit", searchBarHandler);
