export default class JobController {
  constructor(JobsService) {
    this.JobsService = JobsService
    this.activate()
  }

  activate() {
    this.JobsService.getCurrent()
      .then(jobs => {
        this.jobs = jobs
      })
  }
}

JobController.$inject = ['JobsService']
