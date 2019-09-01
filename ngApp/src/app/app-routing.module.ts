import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'events',
    component:EventComponent
  },
  {
    path:'member',
    component:SpecialeventComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
