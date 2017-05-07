import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import JobsController from './controllers/jobs.controller'
import JobsService from './services/jobs.service'

export default angular
  .module('app.jobs', [uirouter])
  .controller('JobsController', JobsController)
  .service('JobsService', JobsService)
  .config(routes)
  .name
