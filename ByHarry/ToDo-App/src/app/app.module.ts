import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemsComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
