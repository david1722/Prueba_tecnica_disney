import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component'
import { HeaderComponent } from './components/header/header.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const APP_ROUTES: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'searcher', component: BodyComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'searcher'}

    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});


