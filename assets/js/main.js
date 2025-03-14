const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  //   console.log("Page chargée");

  $.querySelector(".close").addEventListener("click", () => {
    $.querySelector(".visible").classList.replace("visible", "hidden");
    $.getElementById("contactForm").reset();
  });
  $.querySelector(".popupbackground").addEventListener("click", () => {
    $.querySelector(".visible").classList.replace("visible", "hidden");
    $.getElementById("contactForm").reset();
  });

  $.querySelector(".contactOpener").addEventListener("click", () => {
    $.querySelector(".hidden").classList.replace("hidden", "visible");
  });

  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);
    const response = await axios.post(
      "https://tripadvisor-copycat-back.herokuapp.com/submit-form",
      data
    );
    console.log(response);

    if (response.status === 200) {
      alert("Merci pour votre message ! Votre formulaire a bien été envoyé");
    } else {
      console.log(error.response);
    }

    $.querySelector(".visible").classList.replace("visible", "hidden");
    $.getElementById("contactForm").reset();
  });
});
