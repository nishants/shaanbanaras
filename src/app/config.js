app.value("remote", "https://findfalcone.herokuapp.com");
app.value("requestConfig", {headers: {Accept: "application/json", "Content-Type": "application/json"}});

app.run(["FoodMenuService",function(FoodMenuService){
  return FoodMenuService.load();
}]);
