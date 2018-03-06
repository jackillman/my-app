import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './app.router';
import { CarsComponent } from './pages/cars/cars.component';
import { TrucksComponent } from './pages/trucks/trucks.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MyWeatherComponent } from './widgets/my-weather/my-weather.component';
import { WeatherItemComponent } from './widgets/weather-item/weather-item.component';
import { WeatherListComponent } from './widgets/weather-list/weather-list.component';
import { WeatherSearchComponent } from './widgets/weather-search/weather-search.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { WeatherService } from './widgets/weather.service';
import {HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './blocks/slider/slider.component';
import { CarsListComponent } from './pages/cars/cars-list/cars-list.component';
import { CarItemComponent } from './pages/cars/car-item/car-item.component';



import { AgmCoreModule } from '@agm/core';
import { AutoService } from './services/auto.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    TrucksComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    MyWeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    FooterComponent,
    CatalogComponent,
    SliderComponent,
    CarsListComponent,
    CarItemComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,NgbModule
  ],
  providers: [WeatherService,AutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
