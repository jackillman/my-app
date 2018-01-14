import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItm } from "./weather-itm";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private url: string = "http://api.openweathermap.org/data/2.5/weather?q=";
  private path:string;
  private appid:string = "a1e88fedadb5b6900b81e6f0991a2b46";
  results;
  constructor(private http:HttpClient) { }
  
  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  searchWeatherData(city:string){
    let path = `${this.url} + ${city}&appid=${this.appid}&units=metric`;
    return this.http.get(path).subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.results = data;
      console.log(this.results);
      WEATHER_ITEMS.push(new WeatherItm(this.results.name,this.results.weather[0].main,this.results.main.temp,this.results.weather[0].icon));
    });

  }

 




}
