import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: any;
  fahrenheit: any;
  feelsLike: any;
  humidity: any;

  userInteraction: boolean = false;
  longitude: any = null;
  latitude: any = null;
  data: any;
  errors: boolean = false;
  cityname:any

    constructor(public Service:ServiceService) {}
   
  getSingleDay() {
    this.errors = false;
    this.Service.getSingleDay(this.cityname).subscribe(dataresult5 => {
    let data = dataresult5
      this.data =data.main
    // }else{
    //   this.error = false;
    // }
     
  },(error:HttpErrorResponse)=>{
    this.errors = true;
    this.data = null
  })
}



  clearData() {
 
    this.cityname = '';
    this.errors = false;
    this.data = null
  }
}
