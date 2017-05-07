routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('app.jobs', {
    url: '/',
    views: {
      'content@app': {
        template: require('./views/jobs.html'),
        controller: 'JobsController',
        controllerAs: '$ctrl'
      }
    }
  })
}
