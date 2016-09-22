angular.module("home")
    .controller("homeCtrl", ["$scope", function ($scope) {
        /*$scope.images = ["https://www.google.co.in/search?q=electronics&biw=1366&bih=613&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjc6bae2qLPAhUJxWMKHVxBBdQQ_AUIBygC#tbm=isch&q=iphone+7+s&imgrc=ME4Z9daN2bEnhM%3A", 
                         "http://iphone7sinfo.com/wp-content/uploads/2016/01/Best-Places-to-Buy-the-iPhone-7S-in-Europe.jpg",

   "http://i.dailymail.co.uk/i/pix/2015/10/28/23/2DE3A92C00000578-0-image-m-111_1446073284952.jpg"];*/
        $scope.images = [{
            id: 1,
            image: "image1.jpg"
        }, {
            id: 2,
            image: "image2.jpg"
        }];

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        // var slides = $scope.slides = [];
        var currIndex = 0;

   }]);
