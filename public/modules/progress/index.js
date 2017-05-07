import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'
import JobsController from './controllers/jobs.controller'
import services from '../services'

console.log(JobsController)

export default angular
  .module('app.progress', [uirouter, services])
  .controller('ProgressController', JobsController)
  .config(routes)
  .name
