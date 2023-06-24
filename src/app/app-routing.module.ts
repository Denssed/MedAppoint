import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { AppoimentComponent } from './Components/appoiment/appoiment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { MedsComponent } from './Components/meds/meds.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

const routes: Routes = [
  //General
  { path: 'login', component: LoginComponent },
  //User
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'appoiment', component: AppoimentComponent },
      { path: 'meds', component: MedsComponent },
      { path: 'ticket', component: TicketComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
