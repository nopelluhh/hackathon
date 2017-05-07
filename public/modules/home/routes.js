routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/',
    params: {
      job: null
    },
    views: {
      'content@app': {
        template: require('./views/home.html'),
        controller: 'HomeController',
        controllerAs: 'HomeCtrl'
      }
    }
  })
}
