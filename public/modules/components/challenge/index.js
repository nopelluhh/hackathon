import angular from 'angular'
import './challenge.scss'

export default angular
    .module('app.challenge', [])
    .component('zaChallenge', {
      template: require('./challengeTemplate.html'),
      controller: challengeController,
      bindings: {
        challenge: '<',
        onAnswer: '<'
      }
    })
    .name

function challengeController($sce) {
  var ctrl = this

  ctrl.onSubmit = function(choice) {
    if (ctrl.challenge.type === 'text') {
      ctrl.onAnswer({
        content: choice,
        correct: choice === ctrl.challenge.answer
      })
    } else {
      ctrl.onAnswer(choice)
    }
  }

  ctrl.$onInit = function() {
    ctrl.challenge.description = $sce.trustAsHtml(ctrl.challenge.description.replace(/`(.+?)`/g, '<code>$1</code>'))
    console.log(ctrl.challenge.description)
  }
  ctrl.onChanges = function(changesObj) {}
  ctrl.onDestory = function() {}
}
