app.controller("FoodMenuController", ["$scope", function($scope){
  var foodMenu = {
    items: [
      {
        image: {
          preview: 'assets/images/samples/food-1.jpg'
        }
      }
    ]
  }
  $scope.foodMenu = foodMenu;
}])