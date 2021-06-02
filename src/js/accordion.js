const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach((btn) => {
        btn.addEventListener("click", function() {
            this.classList.toggle("faq__item-title_active");
            this.nextElementSibling.classList.toggle("faq__item-text_active");

            if (this.classList.contains("faq__item-title_active")) {
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });
};

export default accordion;