/**
 * Created by samiyuru on 8/13/14.
 */


//$.backstretch([
//    "img/bg-img03.jpg"
//], {
//    fade: 3000,
//    duration: 5000
//});

//$(document).ready(function () {
//
//    $("#projects-list").owlCarousel({
//        items: 3,
//        autoHeight: true,
//        pagination:true
//    });
//
//});

$(document).ready(function () {
    $('#projects-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('#head').height($(window).height());
    $(window).resize(function () {
        $('#head').height($(window).height());
    });
});

angular.module("myapp", ['ngRoute']);

angular.module("myapp").config(function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/', {
            templateUrl: ''
        }).
        otherwise({
            redirectTo: '/'
        });
});