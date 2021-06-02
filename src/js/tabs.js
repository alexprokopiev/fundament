const tabs = () => {
    let tab = document.querySelectorAll(".samples__tab"),
        menu = document.querySelector(".samples__tab-wrap"),
        tabContent = document.querySelectorAll(".samples__content");

    function hideTabContent() {
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove("samples__tab_active");
        }
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("samples__content_active");
        }
    }

    function showTabContent(a) {
        tab[a].classList.add("samples__tab_active");
        tabContent[a].classList.add("samples__content_active");
    }

    menu.addEventListener("click", function(event) {
        let target = event.target.closest(".samples__tab");

        if (target && target.classList.contains("samples__tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent();
                    showTabContent(i);
                }
            }
        }
    });
};

export default tabs;