import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      {
        path: "main",
        loadChildren: () =>
          import("./main/main.module").then((m) => m.MainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
