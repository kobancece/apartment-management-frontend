import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showStatistics = false;
  statistics: any = {};
  statisticsKeys: string[] = [];
  selectedStatistic: string | null = null;
  selectedStatisticKey: string | null = null;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe(data => {
      this.statistics = data;
      this.statisticsKeys = Object.keys(data);
    });
  }

  toggleStatistics(): void {
    this.showStatistics = !this.showStatistics;
  }

  fetchStatistic(event: any): void {
    const key = event.target.value;
    if (key) {
      this.selectedStatisticKey = key;
      this.selectedStatistic = this.statistics[key];
    } else {
      this.selectedStatisticKey = null;
      this.selectedStatistic = null;
    }
  }
}
