export class Task {
  task: string = '';
  scheduledAt: string = '';
  reminder: boolean = false;

  constructor(task: string, scheduledAt: string, reminder: boolean = false) {
    this.task = task;
    this.scheduledAt = scheduledAt;
    this.reminder = reminder;
  }
}
