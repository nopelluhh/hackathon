import angular from 'angular'

export default angular
    .module('app.pointofcontact', [])
    .component('zaContact', {
      template: require('./pointOfContactTemplate.html'),
      controller: contactController,
      bindings: {
        onSubmit: '<'
      }
    })
    .name

function contactController($http) {
  var ctrl = this
  this.submitPhone = function(number) {
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    var options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({number: number})
    }
    ctrl.phoneNumber = 'Thanks!'
    this.onSubmit(true)
  }
}
