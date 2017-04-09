routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('app', {
    abstract: true,
    views: {
      root: {
        template: require('./layout.tpl.html')
      }
    }
  })
}
