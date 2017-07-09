import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <p> This is a message from Warning component </p>
  `,
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
