app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/menu');
  $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'assets/templates/menu-template.html'
      });
}]);
