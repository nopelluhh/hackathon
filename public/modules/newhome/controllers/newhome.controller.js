/* global angular */
'use strict'

angular.module('public.newhome')
    .controller('newHomeController', newHomeController)

newHomeController.$inject = ['newHomeService', '$state']

function newHomeController(newHomeService, $state) {
  var vm = this
  vm.tagline = 'hip hip hooray'
  vm.pong = 'yoooo'
  vm.allJobs = []
  getAllJobs()

  function getAllJobs() {
    newHomeService.getAll(getAllJobsSuccess, onError)
  }

  function getAllJobsSuccess(data) {
    vm.allJobs = data.items
  }

  function onError() {
    console.log('error getting all jobs')
  }
}
