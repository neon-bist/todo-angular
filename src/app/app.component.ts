import { Component } from '@angular/core';

interface Todo {
  id: number;
  desc: string;
  completed: boolean;
  editing: boolean;
}

enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  PENDING = 'pending',
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: string;
  filter = Filter.ALL;
  count: number;
  todos: Todo[] = [
    { id: 0, desc: 'Task one', completed: false, editing: false },
    { id: 1, desc: 'Task two', completed: true, editing: false },
    { id: 2, desc: 'Task three', completed: false, editing: false },
  ];

  constructor() {
    this.count = this.todos.length;
  }

  onSubmit() {
    this.todos.unshift({
      id: this.count,
      desc: this.todo,
      completed: false,
      editing: false,
    });
    this.todo = '';
    this.count++;
  }

  getFilteredTodos() {
    if (this.filter === Filter.COMPLETED) {
      return this.todos.filter((todo) => todo.completed);
    }
    if (this.filter === Filter.PENDING) {
      return this.todos.filter((todo) => !todo.completed);
    }
    return this.todos;
  }

  getIncompleteTodoCount(){
    return this.getFilteredTodos().filter(todo=>!todo.completed).length;
  }

  deleteAllCompleted(){
    this.todos = this.todos.filter(todo=>!todo.completed);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
