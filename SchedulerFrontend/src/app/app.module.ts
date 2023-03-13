import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SheduleComponent } from './shedule/shedule.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { GroupPageComponent } from './group-page/group-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    ProfileComponent,
    SheduleComponent,
    AddSubjectComponent,
    ListSubjectComponent,
    ResetPageComponent,
    GroupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
