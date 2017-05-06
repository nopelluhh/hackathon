import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import newHomeController from './controllers/newhome.controller'
import newHomeService from './services/newhome.service'

export default angular
  .module('app.newhome', [uirouter])
  .controller('newHomeController', newHomeController)
  .service('newHomeService', newHomeService)
  .config(routes)
  .name
