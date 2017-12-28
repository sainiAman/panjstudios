import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {LoggedInGuard} from './services/logged-in.guard';
import { UsersListComponent } from './users-list/users-list.component';



const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'users',
    component: UsersListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UsersListComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService, UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
