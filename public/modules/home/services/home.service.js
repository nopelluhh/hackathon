export default class HomeService {
  constructor($http) {
    this.$http = $http
  }

  ping() {
    return this
      .$http
      .get('/api/ping')
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

HomeService.$inject = ['$http']
