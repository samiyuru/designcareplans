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
//    $('#gallery-slick').slick({
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1
//    });
//
//    $('#poojects-slick').slick({
//        infinite: false,
//        slidesToShow: 1,
//        slidesToScroll: 1
//    });

    $('.glisse').glisse({
        changeSpeed: 550,
        speed: 500,
        effect: 'roll'
    });

    //$('#testpara').imageScroll();

    $('#head').height($(window).height());
    $(window).resize(function () {
        $('#head').height($(window).height());
    });
});

angular.module('myapp', ['ngRoute']);

angular.module('myapp').directive('anchorLink', function ($location) {
    var linksList = [];
    return {
        restrict: 'A',
        scope: {
            link: '@anchorLink'
        },
        link: function (scope, elem, attr) {
            linksList.push(scope.link);

            elem.click(function () {
                $location.path(scope.link);
                scope.$apply();
            });

            scope.$on('$locationChangeSuccess', function (event) {
                for (var i in linksList) {
                    if (linksList[i] == $location.path()) {
                        if (scope.link == $location.path()) {
                            elem.addClass('active');
                        } else {
                            elem.removeClass('active');
                        }
                        return;
                    }
                }
                $location.path('/');
            });
        }
    };
});

angular.module('myapp').directive('anchor', function ($location) {
    return {
        restrict: 'A',
        scope: {
            anchor: '@anchor'
        },
        link: function (scope, elem, attr) {
            scope.$on('$locationChangeSuccess', function (event) {
                if (scope.anchor == $location.path()) {
                    $(document).scrollTo(elem, 400);
                }
            });
        }
    };
});