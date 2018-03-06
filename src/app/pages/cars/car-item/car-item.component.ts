import { Component, OnInit,Input } from '@angular/core';
import { AutoModel } from '../../../../assets/auto.model';





@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.sass']
})
export class CarItemComponent implements OnInit {
  @Input() car:AutoModel;
  items[];
ngOnInit(){
  this.items = this.car;
  console.log(this.car)
}
  
}
