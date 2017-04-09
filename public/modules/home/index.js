import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import HomeController from './controllers/home.controller'
import HomeService from './services/home.service'

export default angular
  .module('app.home', [uirouter])
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  .config(routes)
  .name
