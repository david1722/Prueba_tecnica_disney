import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { PlanModel } from '../models/PlanModel';
import { BookingModel } from '../models/BookingModel';



@Injectable({
  providedIn: 'root'
})
export class BooktoflyService {

  //AccessToken: string = "";
  constructor( private http: HttpClient ) {
    console.log('servicio');
   }
  
//{numberOfDays}/{numberOfAdults}/{numberOfChildren}/{startDate}

   private tokenApi = 'https://demo.booktofly.co/auth/api/auth/agency/token';

  getToken() {

    let tokenmodel = new TokenModel();
    

    tokenmodel.agencyId = 'Pw7uAcZ2xfeuXCrig';
    tokenmodel.agencyKey = 'Lrb1USwZvcGAHQZwHQzV4l7L4AbdYXwv14yhXBMf9ytLnujEYb93EGYC51Y0WpBUuWndDgzOO/xwBFNdbCMxRw==';
    tokenmodel.clientId = 'demo.booktofly.co';


    return this.http.post<string>( this.tokenApi, tokenmodel);
    
  }

    getPlans( token: string,
              numberOfDays: number,
              numberOfAdults: number,
              numberOfChildren: number,
              startDate: Date )  {

    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)

    
    return this.http.get<PlanModel[]>('https://demo.booktofly.co/search/api/plans/disney/availability/ ' + numberOfDays + '/ ' + numberOfAdults + '/ ' + numberOfChildren + '/ ' + startDate  , { headers })
    
    }

    getBookings(token: string){

      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)

      return this.http.post<BookingModel[]>('https://demo.booktofly.co/booking/api/plans/disney/book', { headers })

    }

    

  


}
