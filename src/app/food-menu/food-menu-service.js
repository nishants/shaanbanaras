app.service("FoodMenuService",['$http', function($http){
  var FoodMenu = {
        items: [],
        load: function(){
          return $http.get("/assets/data/food-menu.json").then(function(foodMenuData){
            FoodMenu.items = foodMenuData.data.items;
            return foodMenuData;
          });
        }
  };

  return FoodMenu;
}])