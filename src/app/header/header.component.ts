import { Component, OnInit } from '@angular/core';

import { Candy } from '../candy';
import { CandyDataService } from '../candy-data.service';
import { template } from '@angular/core/src/render3';
@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  template: `
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Candy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      <a class="nav-link" routerLink="/list" routerLinkActive="active">List</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" routerLink="/add" routerLinkActive="active">Add</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" routerLink="/list">Candies: {{candies.length}}</a>
      </li>
      <router-outlet></router-outlet>
    </ul>
  </div>
  </nav>
  </div>
  `
})
export class HeaderComponent implements OnInit {
  candies: Candy[];
  constructor(private candyDataService: CandyDataService) {}

  ngOnInit() {
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));
  }

}
