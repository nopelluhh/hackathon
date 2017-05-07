import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import HomeController from './controllers/home.controller'
import HomeService from './services/home.service'
import services from '../services'

export default angular
  .module('app.home', [uirouter, services])
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  .config(routes)
  .name
