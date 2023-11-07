import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getItems() {
    let url = "http://192.168.68.63:5000/items";
    // url = "http://192.168.68.63:5000/events";
    // url = "http://192.168.68.63:4444/getAllItems";
    this.http.get(url).subscribe(x => {
      console.log(x);
    });
  }
}
