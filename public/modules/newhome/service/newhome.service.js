/* global angular */
'use strict'

angular.module('public.newhome')
    .factory('newHomeService', newHomeServiceFactory)

newHomeServiceFactory.$inject = ['$http']

function newHomeServiceFactory($http) {
  return {
    getAll: getAll,
    insert: insert
  }

  function getAll(data, onSuccess, onError) {
    return $http.get('/api/zipdata', data)
            .then((response) => {
              onSuccess(response.data)
            })
            .catch((response) => {
              onError(response.data)
            })
  }

  function insert(data, onSuccess, onError) {
    return $http.post('/api/zipdata', data)
            .then((response) => {
              onSuccess(response.data)
            })
            .catch((response) => {
              onError(response.data)
            })
  }
}
