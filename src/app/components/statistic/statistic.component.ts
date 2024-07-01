import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  statistics: any = {};
  selectedMetric: string | null = null;
  performanceMetrics: any[] = [];
  loggingMetrics: string[] = [];
  errorMetrics: any[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe(data => {
      this.statistics = data;
      this.organizeMetrics();
    });
  }

  organizeMetrics(): void {
    for (const key in this.statistics) {
      if (key.startsWith('AvgExecutionTime') || key.startsWith('MethodCallCount')) {
        this.performanceMetrics.push({ key, value: this.statistics[key] });
      } else if (key.startsWith('LastExceptionMessage') || key.startsWith('ExceptionCount')) {
        this.errorMetrics.push({ key, value: this.statistics[key] });
      }
    }
  }

  fetchMetric(event: any): void {
    this.selectedMetric = event.target.value;

    if (this.selectedMetric === 'logging') {
      this.statisticsService.getLogs().subscribe(data => {
        this.loggingMetrics = data;
      });
    }
  }
}
