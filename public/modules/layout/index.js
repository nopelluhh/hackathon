import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './routes'

export default angular
  .module('app.layout', [uirouter])
  .config(routes)
  .name
