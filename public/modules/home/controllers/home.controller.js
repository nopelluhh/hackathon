export default class HomeController {
  constructor(HomeService) {
    this.HomeService = HomeService
    this.pong = 'ping'
    this.tagline = 'Hack the Planet!'
  }

  ping() {
    this
      .HomeService
      .ping()
      .then(data => {
        this.pong = data
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}

HomeController.$inject = ['HomeService']
