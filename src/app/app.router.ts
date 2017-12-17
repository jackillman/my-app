import {Routes, RouterModule} from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { TrucksComponent } from './pages/trucks/trucks.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CatalogComponent } from './pages/catalog/catalog.component';


 export const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'trucks', component: TrucksComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: '/'}
];

