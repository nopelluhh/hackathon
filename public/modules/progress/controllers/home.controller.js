export default class HomeController {
  constructor(HomeService) {
    this.HomeService = HomeService
    this.pong = 'ping'
    this.tagline = 'Hack the Planet!'
    this.challenge = {
      '_id': '590e22069092bd6a7c1ba574',
      'field': 'javascript',
      'type': 'text',
      'difficulty': 5,
      'name': 'A Small Challenge',
      'description': 'What does `typeof NaN` evaluate to?',
      '__v': 0,
      'options': [{
        'content': '0',
        'correct': false
      },
      {
        'content': 'boolean',
        'correct': false
      },
      {
        'content': 'null',
        'correct': false
      },
      {
        'content': 'number',
        'correct': true
      }
      ],
      'answer': 'Phil'
    }
  }
  onAnswer(answer) {
    window.alert(answer.correct)
  }
  // the submitnumber function called when user clicks 'send' on submitting cell # in form
  submitNumber(number) {
    // HomeService.submitNumber()
  }
}

HomeController.$inject = ['HomeService']
