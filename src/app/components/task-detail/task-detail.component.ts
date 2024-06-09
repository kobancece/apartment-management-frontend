import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any = {};
  technicians: any[] = [];
  assignedUserName: string = '';
  showUpdateForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getTaskDetails();
    this.getTechnicians();
  }

  getTaskDetails() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.getTaskById(taskId).subscribe({
        next: (task) => {
          this.task = task;
          this.getAssignedUserName(task.userID);
        },
        error: (error) => {
          console.error('Error fetching task details', error);
        }
      });
    } else {
      console.error('Task ID is null');
    }
  }

  getTechnicians() {
    this.userService.getUsersByRole('technician').subscribe({
      next: (technicians) => {
        this.technicians = technicians;
      },
      error: (error) => {
        console.error('Error fetching technicians', error);
      }
    });
  }

  getAssignedUserName(userId: number) {
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.assignedUserName = `${user.name} ${user.surname}`;
      },
      error: (error) => {
        console.error('Error fetching assigned user', error);
      }
    });
  }


  showUpdateFormToggle() {
    this.showUpdateForm = !this.showUpdateForm;
  }

  updateTask() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.updateTask(taskId, this.task).subscribe({
        next: (response) => {
          console.log('Task updated successfully', response);
          this.router.navigate(['/dashboard/task']);
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
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.deleteTask(taskId).subscribe({
        next: (response) => {
          console.log('Task deleted successfully', response);
          this.router.navigate(['/dashboard/task']);
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
