import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task = {
    taskName: '',
    userID: null,
    taskDescription: '',
    assignedName: ''
  };

  constructor(private taskService: TaskService) { }

  onSubmit() {
    this.taskService.createTask(this.task).subscribe({
      next: (response) => {
        console.log('Task created successfully', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating task', error);
      }
    });
  }

  resetForm() {
    this.task = {
      taskName: '',
      userID: null,
      taskDescription: '',
      assignedName: ''
    };
  }
}
