import { Component, OnInit, Input } from '@angular/core';
import { BooktoflyService } from '../../services/booktofly.service';
import { PlanModel } from 'src/app/models/PlanModel';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html'
})
export class PlansComponent implements OnInit {

  @Input() plansCards: PlanModel [] = [];

  
  token: string;
  numberOfDays: number;
  numberOfAdults: number;
  numberOfChildren: number;
  startDate: Date;

  constructor( private booktofly: BooktoflyService ) {
    

 
  }

  search(){

    this.booktofly.getPlans( this.token, this.numberOfDays, this.numberOfAdults, this.numberOfChildren, this.startDate )
      .subscribe( (data: PlanModel[]) => {
        this.plansCards = data; 
      });

    
  }



  ngOnInit() {
    this.booktofly.getToken().subscribe(data => {
      this.token = data;
    });

  }   

}
