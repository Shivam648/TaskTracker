import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: string = '';
  @Input() scheduledAt: string = '';
  @Input() reminder: boolean = false;
}
