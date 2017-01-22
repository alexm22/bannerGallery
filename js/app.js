var app = angular.module('bannerApp', ['ngAnimate', 'sticky', 'directives'])

app.controller('MainCtrl', function($scope, $filter, $window, DataService) {
    $scope.languages = DataService.getLanguages();

    $scope.page = 1;

    $scope.affcode;

    $scope.hideNotif = function () {
      $window.document.getElementById('notifications').className += "hideNotif";
    }

    $scope.openCard = function () {
    }

    $scope.loadStep = function(step, validate) {
        if (typeof validate === "object") {
            if ($filter('filter')(validate, {
                    selected: true
                }).length >= 1) {
                $scope.page = step;
            } else {
                $window.document.getElementById('notifications').innerHTML = "Please choose select an option";
                $window.document.getElementById('notifications').className += "meh rah ";
            }
        } else if (!validate) {
            $window.alert("Please enter a value.")
        } else {
            $scope.page = step;
        }
    }

    $scope.previousStep = function(step) {
        if ($scope.page > step) {
            $scope.page = step;
        }
    }

    DataService.getBanners().then(function(data) {
        $scope.banners = data;
    });


})



app.directive('colorbox', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $(elem).colorbox();
        }
    }
})

app.factory('DataService', function($http, $q) {
    return {
        getBanners: function() {
            var deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: 'data/banners.json'
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.resolve(false);
                });
            return deferred.promise;
        },
        getLanguages: function() {
            return [{
                "code": "ar",
                "title": "Arabic"
            }, {
                "code": "bg",
                "title": "Bulgarian"
            }, {
                "code": "br",
                "title": "Brazilian"
            }, {
                "code": "cs",
                "title": "Czech"
            }, {
                "code": "ca",
                "title": "Catalan"
            }, {
                "code": "de",
                "title": "German"
            }, {
                "code": "da",
                "title": "Danish"
            }, {
                "code": "ee",
                "title": "Estonian"
            }, {
                "code": "en",
                "title": "English"
            }, {
                "code": "es",
                "title": "Spanish"
            }, {
                "code": "fi",
                "title": "Finnish"
            }, {
                "code": "fr",
                "title": "French"
            }, {
                "code": "gr",
                "title": "Greek"
            }, {
                "code": "he",
                "title": "Hebrew"
            }, {
                "code": "hr",
                "title": "Croatian"
            }, {
                "code": "hu",
                "title": "Hungarian"
            }, {
                "code": "id",
                "title": "Indonesian"
            }, {
                "code": "is",
                "title": "Icelandic"
            }, {
                "code": "it",
                "title": "Italian"
            }, {
                "code": "jp",
                "title": "Japanese"
            }, {
                "code": "ko",
                "title": "Korean"
            }, {
                "code": "lt",
                "title": "Lithuanian"
            }, {
                "code": "lv",
                "title": "Latvian"
            }, {
                "code": "my",
                "title": "Malaysian"
            }, {
                "code": "nl",
                "title": "Dutch"
            }, {
                "code": "no",
                "title": "Norwegian"
            }, {
                "code": "ph",
                "title": "filipino"
            }, {
                "code": "pl",
                "title": "Polish"
            }, {
                "code": "pt",
                "title": "portuguese"
            }, {
                "code": "ro",
                "title": "Romanian"
            }, {
                "code": "rs",
                "title": "Serbian"
            }, {
                "code": "ru",
                "title": "Russian"
            }, {
                "code": "sk",
                "title": "slovak"
            }, {
                "code": "sl",
                "title": "Slovene"
            }, {
                "code": "sv",
                "title": "Swedish"
            }, {
                "code": "sw",
                "title": "swahili"
            }, {
                "code": "th",
                "title": "Thai"
            }, {
                "code": "tr",
                "title": "Turkish"
            }, {
                "code": "uk",
                "title": "ukrainian"
            }, {
                "code": "vi",
                "title": "vietnamese"
            }, {
                "code": "zh",
                "title": "Chinese Traditional"
            }, {
                "code": "zs",
                "title": "Chinese Simplified"
            }]
        }

    };
})
