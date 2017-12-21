import { Component, OnInit } from '@angular/core';
import { NgForm, Form} from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass']
})
export class WeatherSearchComponent implements OnInit {
  searchCity:string;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }
  submit(myForm: string){
  //  this.searchCity = myForm.form.value.city
    this.weatherService.searchWeatherData(myForm).subscribe(res=>console.log(res));
  }
}
