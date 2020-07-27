import { RegisterComponent } from './register/register.component';
import { ReturnPasswordComponent } from './return-password/return-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'return-password', component: ReturnPasswordComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
