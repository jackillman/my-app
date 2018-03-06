import {Routes, RouterModule} from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { TrucksComponent } from './pages/trucks/trucks.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

import { CarItemComponent } from './pages/cars/car-item/car-item.component';
import { CarsListComponent } from './pages/cars/cars-list/cars-list.component';

// const carsRoutes: Routes = [
//     { path: 'details', component: CarsComponent}
   
// ];
 export const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'cars/:name', component: CarsListComponent },
    { path: 'trucks', component: TrucksComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: '/'}
];



