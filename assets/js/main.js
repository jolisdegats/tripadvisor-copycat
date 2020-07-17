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
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    const response = await axios.post(
      "https://0c9e5f8419fd.ngrok.io/submit-form",
      data
    );

    if (response.status === 200) {
      alert("Merci pour votre message ! Votre formulaire a bien été envoyé");
    }

    $.querySelector(".visible").classList.replace("visible", "hidden");
    $.getElementById("contactForm").reset();
  });
});
