import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { AutoModel } from '../../../../assets/auto.model';
import { AutoService } from '../../../services/auto.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.sass']
})
export class CarsListComponent implements OnInit {

  cars;

 
  private name: string;
 
   
  private routeSubscription: Subscription;
  // private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, private httpService: AutoService){
       
      this.routeSubscription = route.params.subscribe(params=>this.name=params['name']);
      
      // this.querySubscription = route.queryParams.subscribe(
      //     (queryParam: any) => {
      //         this.product = queryParam['product'];
      //         this.price = queryParam['price'];
      //     }
      // );
  }

  getCategory(){
    if (this.name=="audi"){
      this.httpService.getData().subscribe(data => {
        this.cars = data["audi"];
      });
      
    }
    if (this.name=="ford"){
      this.httpService.getData().subscribe(data => {
        this.cars = data["ford"];
      });
    }
      if (this.name=="ferrari"){
        this.httpService.getData().subscribe(data => {
          this.cars = data["ferrari"];
        });
      
    }
  }

  ngOnInit() {
    this.getCategory()
   
    
  }

}
