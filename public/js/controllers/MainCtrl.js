(function () {
  angular.module('app.main.controller', [])
    .controller('MainController', MainController)

  MainController.$inject = ['exampleService']

  function MainController(exampleService) {
    'use strict'
    var vm = this
    vm.tagline = 'To the moon and back!'
    vm.pong = "PING!"
    vm.ping = function () {
      exampleService.ping()
        .success(function (data) {
        vm.pong = data
      }).error(function (data) {
        console.log(data)
      })
    }


  }
})()
