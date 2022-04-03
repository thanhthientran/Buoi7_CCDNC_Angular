import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() users : String[] = [];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetToActive(id: number): void {
    this.userSetToActive.emit(id);
  }

}
