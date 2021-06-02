const check = () => {
    const inputs = document.querySelectorAll(".calc__form-img"),
        checks = document.querySelectorAll(".calc__form-check");

    inputs.forEach((input, i) => {
        input.addEventListener("click", function() {
            checks.forEach((check) => {
                check.style.display = "none";
            });
            checks[i].style.display = "flex";
        });
    });
};

export default check;