import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss'],
})
export class ToDosComponent {
  todos: Todo[] | undefined;

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'delectus aut autem',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.',
        completed: true,
      },
      {
        sno: 2,
        title: 'amo ghdku tyui',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.',
        completed: false,
      },
      {
        sno: 3,
        title: 'iuytre ssw',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quod tempore nesciunt consequatur.',
        completed: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    this.todos?.splice(this.todos?.indexOf(todo), 1);
  }
}
