/**
 * Created by samiyuru on 8/13/14.
 */
$(document).ready(function () {
    $('#head').parallax("50%", 0.3);
    $('#aboutus').parallax("50%", 0.2);
    $('#contactus').parallax("50%", 0.3);

    $('#head').height($(window).height());
    $(window).resize(function () {
        $('#head').height($(window).height());
    });
});

angular.module('myapp', []);

angular.module('myapp').controller('projects', function ($scope) {

    $scope.contLst = [
        {
            title: 'Project Name 1',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        },
        {
            title: 'Project Name 2',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        },
        {
            title: 'Project Name 3',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        },
        {
            title: 'Project Name 4',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        },
        {
            title: 'Project Name 5',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        },
        {
            title: 'Project Name 6',
            thumbPath: 'img/bg-img01.jpg',
            info: [
                {
                    title: 'image one title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image two title',
                    src: 'img/bg-img01.jpg'
                },
                {
                    title: 'image three title',
                    src: 'img/bg-img01.jpg'
                }
            ],
            text: 'det ai les about the pr oject de tails about the pro ject deta ils about the pro ject'
        }
    ];

});


angular.module('myapp').controller('gallery', function ($scope) {

    $scope.contLst = [
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        },
        {
            title: 'Project Name',
            thumbPath: 'img/bg-img01.jpg',
            imgPath: 'img/bg-img01.jpg'
        }
    ];

});

angular.module('myapp').directive('anchorLink', function ($location) {
    var linksList = [], count = 0;
    return {
        restrict: 'A',
        scope: {
            link: '@anchorLink'
        },
        link: function (scope, elem, attr) {
            linksList.push(scope.link);

            elem.click(function () {
                $location.path(scope.link);
                scope.$emit('PATH_UPDATE', scope.link);
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

angular.module('myapp').directive('anchor', function ($location, $rootScope) {

    return {
        restrict: 'A',
        scope: {
            anchor: '@anchor'
        },
        link: function (scope, elem, attr) {
            scope.$on('$locationChangeStart', function (event) {
                if (scope.anchor == $location.path()) {
                    $(document).scrollTo(elem, 400);
                }
            });

            $rootScope.$on('PATH_UPDATE', function (a, b) {
                if (scope.anchor == b) {
                    $(document).scrollTo(elem, 400);
                }
            });
        }
    };
});


angular.module('myapp').directive('limList', function ($location, $rootScope) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {},
        controller: function ($scope) {
            $scope.items = [];

            this.addItem = function (itemElem) {
                $scope.items.push(itemElem);
            }

            this.removeItem = function (itemElem) {
                for (var i = $scope.items.length - 1; i >= 0; i--) {
                    if ($scope.items[i] == itemElem) {
                        $scope.items.splice(i, 1);
                    }
                }
            }
        },
        link: function (scope, elem, attr) {
            var perload = parseInt(attr.perload), limCout = parseInt(attr.limList);
            if (!perload) {
                perload = 1;
            }
            if (!limCout) {
                limCout = 1;
            }

            var showCount = limCout;

            function updateShowMode() {
                var itemLen = scope.items.length;
                if (limCout >= itemLen) {
                    scope.isShowMore = false;
                } else {
                    scope.isShowMore = true;
                    if (showCount < itemLen) {
                        scope.moreMode = true;
                    } else {
                        scope.moreMode = false;
                    }
                }
            }

            function updateShowList() {
                for (var i = 0; i < scope.items.length; i++) {
                    if (i < showCount) {
                        scope.items[i].show();
                    } else {
                        scope.items[i].hide();
                    }
                }
            }

            scope.$watch('items.length', function () {
                updateShowMode();
                updateShowList();
            });

            scope.showMore = function () {
                showCount += perload;
                updateShowMode();
                updateShowList();
            };

            scope.showLess = function () {
                showCount = limCout;
                updateShowMode();
                updateShowList();
                $(document).scrollTo(scope.items[0], 400);
            };
        },
        template: '<div>\
                    <div ng-transclude=""></div>\
                    <div ng-show="isShowMore" class="showmore container">\
                        <span ng-click="showMore()" ng-show="moreMode"><span class="glyphicon glyphicon-arrow-down"></span><span class="txt">Show more</span></span>\
                        <span ng-click="showLess()" ng-show="!moreMode"><span class="glyphicon glyphicon-arrow-up"></span><span class="txt">Show less</span></span>\
                    </div>\
                    </div>'
    };
});

angular.module('myapp').directive('limListItem', function ($location, $rootScope) {
    return {
        restrict: 'A',
        require: '^limList',
        scope: {},
        link: function (scope, elem, attr, limList) {
            limList.addItem(elem);
            scope.$on('$destroy', function () {
                limList.removeItem(elem);
            })
        }
    };
});


angular.module('myapp').directive('bigImg', function () {
    var itemsObj = {};
    return {
        restrict: 'A',
        scope: {
            path: '&bigImg',//string path or array of {src:'',title:''}
            gkey: '@gkey'
        },
        link: function (scope, elem, attr) {
            var index = 0;

            if (typeof scope.path() == 'object') {
                itemsObj[scope.gkey] = scope.path();
            } else {
                if (!itemsObj[scope.gkey]) {
                    itemsObj[scope.gkey] = [];
                }

                index = itemsObj[scope.gkey].length;

                itemsObj[scope.gkey].push({
                    src: scope.path(),
                    title: 'sample title'
                });
            }

            elem.click(function () {
                $.magnificPopup.open({
                    items: itemsObj[scope.gkey],
                    type: 'image',
                    key: scope.gkey,
                    gallery: {
                        enabled: true
                    },
                    closeBtnInside: false
                }, index);
            });
        }
    };
});