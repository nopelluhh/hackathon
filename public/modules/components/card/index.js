import angular from 'angular'
import './card.scss'

export default angular
    .module('app.card', [])
    .component('zaCard', {
      template: require('./cardTemplate.html'),
      transclude: {
        title: '?cardTitle',
        body: 'cardBody'
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