import { Component, OnInit } from '@angular/core';
import { NgForm, Form} from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass']
})
export class WeatherSearchComponent implements OnInit {
  searchCity:string;
  constructor() { }

  ngOnInit() {
  }
  submit(myForm: NgForm){
    this.searchCity = myForm.form.value.city
    console.log(myForm.form.value.city);
  }
}
