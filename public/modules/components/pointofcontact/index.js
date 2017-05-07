import angular from 'angular'
import './pointofcontact.scss'

export default angular
    .module('app.pointofcontact', [])
    .component('zaPointOfContact', {
      template: require('./pointOfContactTemplate.html'),
      transclude: {
        title: '?pointOfContactTitle',
        body: 'pointOfContactBody'
      },
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
}
