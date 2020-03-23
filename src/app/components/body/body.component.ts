import { Component, OnInit } from '@angular/core';
import { BooktoflyService } from '../../services/booktofly.service';
import { PlanModel } from 'src/app/models/PlanModel';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent implements OnInit {

  show: true;
  
  plansCards: PlanModel [] = [];
  termino: string;

 
  token: string;
  numberOfDays: number;
  numberOfAdults: number;
  numberOfChildren: number;
  startDate: Date;
  

  constructor( 
                private booktofly: BooktoflyService ) {
                  ;

  }

  

  search(){

    this.booktofly.getPlans( this.token, this.numberOfDays, this.numberOfAdults, this.numberOfChildren, this.startDate )
      .subscribe( (data: PlanModel[]) => {
        this.plansCards = data; 
      });

      this.show = true;
    
  }


  ngOnInit() {

    this.booktofly.getToken().subscribe(data => {
      this.token = data;
    });

    
   
    
  
  }

}


  
