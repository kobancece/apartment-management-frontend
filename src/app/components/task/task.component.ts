import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = {
    taskName: '',
    userID: null,
    taskDescription: '',
    assignedName: ''
  };

  technicians: any[] = [];
  successMessage: string | null = null;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTechnicians();
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

  onSubmit() {
    this.taskService.createTask(this.task).subscribe({
      next: (response) => {
        console.log('Task created successfully', response);
        this.router.navigate(['/dashboard/task']);
      },
      error: (error) => {
        console.error('Error creating task', error);
      }
    });
  }
}
