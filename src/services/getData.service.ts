import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    cities: Array<object> = [
      { name: 'Pune'},
      { name: 'Mumbai'},
      { name: 'Delhi'},
      { name: 'Nasik'},
      { name: 'Ahmednagar'}
    ];
    getCities() {
      return of(this.cities);
    }
  }