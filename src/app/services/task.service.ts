import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/apartment/task';

  constructor(private http: HttpClient) { }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, task);
  }

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(taskId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${taskId}`);
  }

  updateTask(taskId: string, task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${taskId}/update`, task);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}/delete`);
  }
}
