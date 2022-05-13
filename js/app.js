const faqQuestion = document.querySelectorAll(".faq-question");
const faqDescription = document.querySelector(".faq-description");
const active = document.querySelector(".active");

faqQuestion.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});