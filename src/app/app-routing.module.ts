import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./login/auth.guard";
import {BookingComponent} from "./booking/booking.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'booking', component: BookingComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
