import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { BooktoflyService } from './services/booktofly.service';

//Components
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { PlansComponent } from './components/plans/plans.component';
import { BookingsComponent } from './components/bookings/bookings.component';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    PlansComponent,
    BookingsComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooktoflyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
