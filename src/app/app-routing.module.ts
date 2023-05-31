import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { AppoimentComponent } from './Components/appoiment/appoiment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { MedsComponent } from './Components/meds/meds.component';

const routes: Routes = [
  //General
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  //User
  {path: 'user', component: UserComponent},
  {path: 'appoiment', component: AppoimentComponent},
  {path: 'ticket', component: TicketComponent},
  //Meds
  {path: 'schedule', component: ScheduleComponent},
  //Admin
  {path: 'doctors', component: MedsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
