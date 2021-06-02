const sendmail = () => {
    let form = document.querySelectorAll("form"),
        modals = document.querySelectorAll(".overlay"),
        input = document.querySelectorAll("input:not([type=hidden])"),
        thanks = document.querySelector("#modal-thanks");

    form.forEach(function(formItem) {
        formItem.addEventListener("submit", function(event) {
            event.preventDefault();
            let formData = new FormData(formItem);

            function postData(data) {
                let request = new XMLHttpRequest();
                request.open("POST", "sendmail.php");

                request.addEventListener("readystatechange", function() {
                    if (request.readyState === 4 && request.status == 200) {
                        modals.forEach(function(modal) {
                            modal.style.display = "none";
                        });
                        thanks.style.display = "block";
                    }
                });

                request.send(data);
            }

            function clearInput() {
                for (let x = 0; x < input.length; x++) {
                    input[x].value = "";
                }
            }

            postData(formData);
            clearInput();
        });
    });
};

export default sendmail;