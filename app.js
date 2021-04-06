(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
        
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope){
        $scope.Meals = "";
        $scope.MealsValue = ""
        $scope.checkMeals = function () {
            var MealsQuantity =  calculateMeals($scope.Meals);
            //$scope.MealsValue = MealsQuantity;
            if ($scope.Meals === "") {
                $scope.MealsValue = 'Please enter data first';
            }
            else {
                if (MealsQuantity <= 3) {
                $scope.MealsValue = 'Enjoy!';
                } else {
                $scope.MealsValue = 'Too much!';
                }
            }
            }
            function calculateMeals(string) {
                var MealsArray = [];
                MealsArray = string.trim().split(',');
                var ArrayMealsCount = 0;
                ArrayMealsCount = MealsArray.length;
                return ArrayMealsCount;
            }

        
    }

})();
