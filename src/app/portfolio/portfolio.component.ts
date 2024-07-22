import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioData: any;
  activeTab = 0;

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit() {
    this.loadPortfolioData();
  }

  loadPortfolioData() {
    this.portfolioDataService.getPortfolioData().subscribe(
      data => {
        this.portfolioData = data;
      },
      error => {
        console.error('Error loading portfolio data', error);
      }
    );
  }

  handleTabChange(index: number) {
    this.activeTab = index;
  }
}