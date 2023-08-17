import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mainTitle: string = 'Task Tracker';
  buttonText: string = '';
  isOpen: boolean = false;
  // @Output() toggleEvent = new EventEmitter<bollean>();

  constructor() {
    this.buttonText = this.isOpen ? 'Open' : 'Close';
  }

  buttonClick(): void {
    this.isOpen = !this.isOpen;
    this.buttonText = this.isOpen ? 'Open' : 'Close';
  }
}
