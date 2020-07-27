import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [MainComponent, OneComponent, TwoComponent, ThreeComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
