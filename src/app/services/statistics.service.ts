import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private baseUrl = 'http://localhost:8082/apartment/statistics';

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getLogs(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/logs`);
  }
}
