import { Component, OnInit } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
import { Candy } from '../candy';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.css']
})
export class CandyListComponent implements OnInit {

  candies: Candy[];
  selectedCandy: Candy



  constructor(private candyDataService: CandyDataService) {
  }

  deleteCandy(candy: Candy): void {
    console.log("Triggered")
    console.log("removed candy at index " + this.candies.indexOf(candy))
    this.selectedCandy = candy
    const index: number = this.candies.indexOf(candy);
    this.candies.splice(index, 1);


  }

  ngOnInit() {
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));

  }

}
