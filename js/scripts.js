$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 5,
        pause: false
    });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else {
            if ($("#carouselButton").children("span").hasClass("fa-play")) {
                $("#mycarousel").carousel("cycle");
                $("#carouselButton").children("span").removeClass("fa-play");
                $("#carouselButton").children("span").addClass("fa-pause");
            }
        }
    });

    $("#reserveBtn").click(function () {
        $("#reservationModal").modal("toggle");
    });

    $("#loginLink").click(function () {
        $("#loginModal").modal("toggle");
    });

});