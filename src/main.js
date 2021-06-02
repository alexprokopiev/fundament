import "./style.sass";
import accordion from "./js/accordion";
import check from "./js/check";
import tabs from "./js/tabs";
import mask from "./js/mask";
import sendmail from "./js/sendmail";
import modal from "./js/modal";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    accordion(".faq__item-title");
    check();
    tabs();
    mask("input[name=phone]");
    sendmail();
    modal();
});