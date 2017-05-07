export default class JobsService {
  constructor($http) {
    this.$http = $http
  }

  getCurrent() {
    return this
      .$http
      .get('https://zipbuddy.herokuapp.com/api/zipdata')
      .then(this.xhrSuccess)
      .catch(this.onError)
  }

  xhrSuccess(response) {
    return response.data.map(job => {
      job.url = job.link.match(/\.com\/jobs\/(.+?)\//)[1]
      return job
    })
  }

  onError(error) {
    console.log(error.data)
  }
}

JobsService.$inject = ['$http']
