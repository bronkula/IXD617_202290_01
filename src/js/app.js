import { AnimalProfilePage, ListPage, RecentPage, UserProfilePage } from "./routes.js";
import { checkSigninForm, checkUserId } from "./signin.js";

// Document Ready
$(() => {

    checkUserId();

    $(document)

    .on("pagecontainerbeforeshow", function(event, ui) {
        
        /* PAGE ROUTES */
        switch(ui.toPage[0].id) {
            case "recent-page": RecentPage(); break;
            case "list-page": ListPage(); break;
            case "user-profile-page": UserProfilePage(); break;
            case "animal-profile-page": AnimalProfilePage(); break;
        }
    })


    // EVENT DELEGATION
    .on("submit", "#signin-form", function(e) {
        e.preventDefault();
        checkSigninForm();
    })

    .on("click", ".js-logout", function(e) {
        sessionStorage.removeItem("userId");
        checkUserId();
    })



    // ACTIVATE TOOLS
    .on("click", "[data-activate]", function(e) {
        const target = $(this).data("activate");
        $(target).addClass("active");
    })
    .on("click", "[data-deactivate]", function(e) {
        const target = $(this).data("deactivate");
        $(target).removeClass("active");
    })
    .on("click", "[data-toggle]", function(e) {
        const target = $(this).data("toggle");
        $(target).toggleClass("active");
    })
    .on("click", "[data-activateone]", function(e) {
        const target = $(this).data("activateone");
        $(target).toggleClass("active")
            .siblings().removeClass("active");
    })
});