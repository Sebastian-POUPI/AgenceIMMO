import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSigninComponent} from './admin/admin-signin/admin-signin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SingleProportyComponent } from './single-proporty/single-proporty.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ClassifiedsComponent } from './classifieds/classifieds.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'annonces', component: ClassifiedsComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'property/:id', component: SingleProportyComponent},
  {path : 'admin/login', component: AdminSigninComponent},
  {path: 'admin/dashboard', canActivate: [AuthGuardService], component: AdminDashboardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
