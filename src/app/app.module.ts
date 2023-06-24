import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { AppoimentComponent } from './Components/appoiment/appoiment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { MedsComponent } from './Components/meds/meds.component';
import { NavTabComponent } from './Components/nav-tab/nav-tab.component';
import { MaterialModule } from 'material.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    AppoimentComponent,
    TicketComponent,
    ScheduleComponent,
    MedsComponent,
    NavTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule,
    MatCardModule,
    FormsModule,   
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
