import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReturnPasswordComponent } from './return-password/return-password.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, ReturnPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
