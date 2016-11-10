(function () {
  angular.module('appRoutes', [])
    .config(RouteConfig)

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainController as main'
      })

    $locationProvider.html5Mode(true)
  }
})();