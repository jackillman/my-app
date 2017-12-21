import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
 appid:string = "a1e88fedadb5b6900b81e6f0991a2b46";
  constructor(private http:HttpClient) { }
  
  getWeatherItems(){
    return WEATHER_ITEMS;
  }
  searchWeatherData(cityName:string):Observable<any>{
   return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + this.appid+"units=metric")
             .map((response:Response)=>response.json())
             .catch(error=>{
                console.error(error)
                return Observable.throw(error.json());  
          });
  }
}
