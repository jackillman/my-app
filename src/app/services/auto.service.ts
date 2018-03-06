import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AutoModel } from '../../assets/auto.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AutoService {

  car:AutoModel;

  constructor(private http: HttpClient) { 

    
  }
  getData(){
   return this.http.get('../../assets/autolists/cars.list.json')
  //  .subscribe((data:AutoModel) => this.car=data);
    
  }
  getUsers() {
    return this.http.get('../../assets/autolists/cars.list.json')
    // .map(data=>{
    //     let audiList = data["audi"];
    //     return audiList.map(function(car) {
    //       // console.log(car)
    //         return {name: car.name, title: car.title};
    //       });
    }

}
