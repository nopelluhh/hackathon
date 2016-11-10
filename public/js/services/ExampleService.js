(function () {
  angular.module('app.example.service', [])
    .factory('exampleService', ExampleServiceFactory)

  ExampleServiceFactory.$inject = ['$http']

  function ExampleServiceFactory($http) {
    return {
      // call to get all hackers
      ping: function () {
        return $http.get('/api/ping')
      },
    }
  }
})()
