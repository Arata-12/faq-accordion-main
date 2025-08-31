// select all faq elements
const faqs = document.querySelectorAll(".faq");
// set initial display state of all answers to "none"
faqs.forEach((faq) => {
  const answer = faq.querySelector(".answer");
  const plusIcon = faq.querySelector(".plus-icon");
  const minusIcon = faq.querySelector(".minus-icon");
  answer.style.display = "none";
  plusIcon.style.display = "block";
  minusIcon.style.display = "none";
});
// loop through each faq element
faqs.forEach((faq) => {
  // select the question element within the faq
  const question = faq.querySelector(".question");
  // add click event listener to the question
  question.addEventListener("click", () => {
    // show answer of clicked faq question
    const answer = faq.querySelector(".answer");
    const plusIcon = faq.querySelector(".plus-icon");
    const minusIcon = faq.querySelector(".minus-icon");

    // Toggle answer visibility
    answer.style.display = answer.style.display === "none" ? "block" : "none";

    // Toggle icons for clicked question
    plusIcon.style.display =
      answer.style.display === "block" ? "none" : "block";
    minusIcon.style.display =
      answer.style.display === "block" ? "block" : "none";

    // hide all answers not clicked and reset their icons
    const allFaqs = document.querySelectorAll(".faq");
    allFaqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        const otherAnswer = otherFaq.querySelector(".answer");
        const otherPlus = otherFaq.querySelector(".plus-icon");
        const otherMinus = otherFaq.querySelector(".minus-icon");

        otherAnswer.style.display = "none";
        otherPlus.style.display = "block";
        otherMinus.style.display = "none";
      }
    });
  });
});
