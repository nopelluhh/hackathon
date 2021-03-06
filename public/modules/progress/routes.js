routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('app.progress', {
    url: '/jobs/:url',
    params: {
      job: null
    },
    views: {
      'content@app': {
        template: require('./views/home.html'),
        controller: 'ProgressController',
        controllerAs: '$ctrl'
      }
    }
  })
}
