import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  query: string = '';  // Boş bir sorgu stringi
  results: any[] = [];
  resultKeys: string[] = [];
  noResultsFound: boolean = false;

  constructor(private http: HttpClient) {}

  runQuery() {
    this.noResultsFound = false;  // Reset the no results flag
    this.http.post<any[]>('http://localhost:8082/apartment/sparql/query', this.query, { headers: { 'Content-Type': 'text/plain' } })
      .subscribe(
        (data) => {
          if (data.length === 1 && data[0].message === "No results found") {
            this.noResultsFound = true;
            this.results = [];
          } else {
            this.results = data;
            if (data.length > 0) {
              this.resultKeys = Object.keys(data[0]);
            }
          }
        },
        (error) => {
          console.error('Error running query', error);
        }
      );
  }
}
