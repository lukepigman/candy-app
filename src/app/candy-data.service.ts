import { Injectable } from '@angular/core';
import { Candy } from './candy';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandyDataService {

  // array of candy
  candies: Candy[] = [];

  // method to get candy
  // was: getCandy(): Candy[] {
  getCandy(): Observable<Candy[]> {
    // was: return this.candies;
    return of(this.candies);
  }

  // method to add candy
  addCandy(candy: Candy) {
    this.candies.push(candy);
  }

  deleteCandy(candy: Candy){
    console.log("triggered")
    const index: number = this.candies.indexOf(candy)
    if (index !== -1){
      this.candies.splice(index, 1);
    }
  }

  constructor() { }
}
