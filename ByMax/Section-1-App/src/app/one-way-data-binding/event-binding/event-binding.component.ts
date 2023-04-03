import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  users = [
    {
      name: 'Subh',
      age: 25,
    },
    {
      name: 'Rahul',
      age: 27,
    },
    {
      name: 'Mani',
      age: 28,
    },
  ];

  onDeleteAllUsers(users: any) {
    this.users = this.users.splice(this.users.length, -1);
  }

  onDeleteSpecificUser(i: number) {
    this.users.splice(i, 1);
  }
}
