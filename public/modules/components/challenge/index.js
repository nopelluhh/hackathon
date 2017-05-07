import angular from 'angular'
import './challenge.scss'

export default angular
    .module('app.challenge', [])
    .component('zaChallenge', {
      template: require('./challengeTemplate.html'),
      controller: challengeController,
      bindings: {
        challenges: '<',
        onAnswer: '<'
      }
    })
    .name

function challengeController($sanitize, $element) {
  var ctrl = this
  var slider = document.getElementById('challenge__slider')
  console.log(slider)
  ctrl.onSubmit = function(choice) {
    let correct, data
    if (ctrl.challenge.type === 'text') {
      correct = choice === ctrl.challenge.answer
      data = {
        content: choice,
        correct: correct
      }
    } else {
      data = choice
      correct = choice.correct
    }

    if (correct) { slider.style.transform = 'translate(-67%, 0)' } else { slider.style.transform = 'translate(0, 0)' }
    this.onAnswer(data)
  }

  // ctrl.$onInit = function() {
  //   this.challenge = this.challenges.shift()
  // }

  ctrl.$onChanges = function(changesObj) {
    if (changesObj.challenges.currentValue && !this.challenge) {
      this.challenge = changesObj.challenges.currentValue.shift()
    }
  }

  ctrl.newQuestion = function() {
    this.challenge = this.challenges.shift()
    slider.style.transform = 'translate(-33%, 0)'
  }
}
