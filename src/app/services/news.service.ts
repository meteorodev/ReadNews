import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url:string;
  private vector:any=[];

  constructor(private _http:HttpClient) { 
    //this.url="https://jsonplaceholder.typicode.com/users";
    this.url="https://www.elcomercio.com/rss/opinion";
  }


  getNewsItems(){
    //return this.http.get(this.urlapi);
    //.pipe(map(res => res.json())); 
    let page = this._http.get(this.url)
    .subscribe((res) => {
        console.log(res)
        this.vector=res;
      });
    return page;
    //return this._http.get(this.url);
  }

}

