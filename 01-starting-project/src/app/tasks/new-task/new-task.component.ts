import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // @Output() newTask = new EventEmitter<Task>()
  // @Input({required:true}) task!: Task


  // onAddTask(){
  //   this.newTask.emit(this.newTasks)
  // }

  newTask: Task = {
    id: 't10',
    userId: 'u2',
    title: 'New task',
    summary: 'New task',
    dueDate: '2025-10-20',
  };
}
