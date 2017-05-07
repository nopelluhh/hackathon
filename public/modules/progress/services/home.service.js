export default class HomeService {
  constructor($http) {
    this.$http = $http
  }

  ping() {
    return this
      .$http
      .get('/api/jobs')
      .then(this.xhrSuccess)
      .catch(this.onError)
  }

  submitNumber() {
    return this
    .$http
    .post('api/userupload')
    .then(this.submitSuccess)
    .catch(this.onError)
  }

  submitSuccess(number) {
    return number.data
  }
  xhrSuccess(response) {
    return response.data
  }

  onError(error) {
    console.log(error.data)
  }
}

HomeService.$inject = ['$http']
