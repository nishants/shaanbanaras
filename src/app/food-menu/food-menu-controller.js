app.controller("FoodMenuController", ["$scope", "FoodMenuService", function($scope, FoodMenuService){
  $scope.foodMenu = FoodMenuService;
}])