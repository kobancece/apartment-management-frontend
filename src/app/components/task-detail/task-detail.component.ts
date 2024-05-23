import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any = {};
  taskEdit: any = {}; // Copy of the task for editing
  showUpdateForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.getTaskDetails();
  }

  getTaskDetails() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.getTaskById(taskId).subscribe({
        next: (task) => {
          this.task = task;
          this.taskEdit = { ...task }; // Make a copy of the task for editing
          console.log('Task details fetched successfully', task);
        },
        error: (error) => {
          console.error('Error fetching task details', error);
        }
      });
    } else {
      console.error('Task ID is null');
    }
  }

  showUpdateFormToggle() {
    this.showUpdateForm = true; // Show the update form when the button is clicked
  }

  updateTask() {
    if (this.taskEdit.taskID) {
      this.taskService.updateTask(this.taskEdit.taskID, this.taskEdit).subscribe({
        next: (response) => {
          console.log('Task updated successfully', response);
          this.task = { ...this.taskEdit }; // Update the displayed task details
          this.showUpdateForm = false; // Hide the update form
          this.router.navigate(['/dashboard/task/all']);
        },
        error: (error) => {
          console.error('Error updating task', error);
        }
      });
    } else {
      console.error('Task ID is null');
    }
  }

  deleteTask() {
    if (this.task.taskID) {
      this.taskService.deleteTask(this.task.taskID).subscribe({
        next: (response) => {
          console.log('Task deleted successfully', response);
          this.router.navigate(['/dashboard/task/all']);
        },
        error: (error) => {
          console.error('Error deleting task', error);
        }
      });
    } else {
      console.error('Task ID is null');
    }
  }
}
