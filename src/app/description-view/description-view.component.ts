import { Component, inject, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-description-view',
  standalone: true,
  imports: [],
  templateUrl: './description-view.component.html',
  styleUrl: './description-view.component.scss'
})
export class DescriptionViewComponent implements OnInit {

  analyticsService = inject(AnalyticsService)

  ngOnInit(): void {
    this.analyticsService.trackEvent("website loaded")
  }
}
