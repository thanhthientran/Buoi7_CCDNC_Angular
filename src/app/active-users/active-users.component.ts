import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  @Input() users: String[] = [];
  @Output() userSetToInactive = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSetToInactive(id : number): void {
    this.userSetToInactive.emit(id);
  }

}
