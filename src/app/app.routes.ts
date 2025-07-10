import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';

export const routes: Routes = [
    { path: '', redirectTo: 'best-seller', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'best-seller', component: BestSellerComponent }

];
