routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('app.newhome', {
    url: '/',
    views: {
      'content@app': {
        template: require('./views/newhome.html'),
        controller: 'newHomeController',
        controllerAs: 'newHomeCtrl'
      }
    }
  })
}
