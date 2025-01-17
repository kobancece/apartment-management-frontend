import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.fetchAllTasks();
  }

  fetchAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks fetched successfully', tasks);
    }, error => {
      console.error('Error fetching tasks', error);
    });
  }
}
