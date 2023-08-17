import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task('Appointment with Dr. Strange', '2021-01-01 10:00 AM', false),
    new Task('Appointment with Dr. Banner', '2021-01-01 11:00 AM', true),
    new Task('Appointment with Dr. Who', '2021-01-01 12:00 PM', false),
    new Task('Appointment with Dr. Doom', '2021-01-01 01:00 PM', true),
    new Task('Appointment with Dr. Fate', '2021-01-01 02:00 PM', true),
  ];
}
