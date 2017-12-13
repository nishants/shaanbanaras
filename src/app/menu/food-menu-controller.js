app.controller("FoodMenuController", ["$scope", function($scope){
  var foodMenu = {
    items: [
      {
        id    : 1,
        image: {preview: 'assets/images/samples/food-1.jpg',},
        price : 180,
        title  : "Banarasi Chicken Shorba",
      },
      {
        id    : 2,
        image: {preview: 'assets/images/samples/food-1.jpg',},
        price : 280,
        title  : "Banarasi Chicken Shorba",
      },
      {
        id    : 3,
        image: {preview: 'assets/images/samples/food-1.jpg',},
        price : 80,
        title  : "Banarasi Chicken Shorba",
      }
    ]
  }
  $scope.foodMenu = foodMenu;
}])