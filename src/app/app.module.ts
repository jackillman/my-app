import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';

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
    CatalogComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
