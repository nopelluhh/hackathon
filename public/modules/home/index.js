import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import HomeController from './controllers/home.controller'
import services from '../services'

export default angular
  .module('app.home', [uirouter, services])
  .controller('HomeController', HomeController)
  .config(routes)
  .name
