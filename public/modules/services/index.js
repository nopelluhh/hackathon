import angular from 'angular'

class fetcher {
  constructor($http) {
    this.$http = $http
    this.prefix = '/api/'
  }

  get(resource, params) {
    return this
      .$http
      .get(this.prefix + resource)
      .then(this.xhrSuccess)
      .catch(this.onError)
  }

  xhrSuccess(response) {
    return response.data
  }

  onError(error) {
    console.log(error.data)
  }
}

fetcher.$inject = ['$http']

export default angular.module('app.services', [])
.service('fetcher', fetcher)
.name
