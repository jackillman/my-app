import { Component, OnInit,Input } from '@angular/core';
import { WeatherItm } from '../weather-itm';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.sass']
})
export class WeatherItemComponent implements OnInit {
  @Input() weatherItem:WeatherItm;
  constructor() { }

  ngOnInit() {
  }

}
