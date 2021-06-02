const modal = () => {
    function bindModal(modalSelector, closeSelector, triggerSelector = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            scroll = calcScroll();

        if (triggerSelector != false) {
            trigger.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                });
            });
        }

        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function calcScroll() {
        let div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal("#modal-call", "#modal-call-close", ".show-modal-call");
    bindModal("#modal-confidence", "#modal-confidence-close", "#show-confidence");
    bindModal("#modal-thanks", "#modal-thanks-close");
};

export default modal;