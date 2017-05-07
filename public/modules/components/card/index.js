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
}
