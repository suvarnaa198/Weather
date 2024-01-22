import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data1:any
  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key: string = '&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3';
  constructor(public http: HttpClient) { }
  getSingleDay(cityname:any): Observable<any> {
    return this.http.get(this.baseUrl + cityname + this.key)
   

  }
}
