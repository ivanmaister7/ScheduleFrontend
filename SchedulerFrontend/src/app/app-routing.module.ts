import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { SheduleComponent } from './shedule/shedule.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shedule', component: SheduleComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'add', component: AddSubjectComponent },
  { path: 'list', component: ListSubjectComponent },
  { path: 'reset', component: ResetPageComponent },
  { path: 'group', component: GroupPageComponent },
  { path: 'home', component: HomePageComponent },
  
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
