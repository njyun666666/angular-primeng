import { SharedModule } from './../shared/shared.module';
import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { D1Component } from './d1/d1.component';


@NgModule({
  declarations: [
    DashboardComponent,
    D1Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule,
    SharedModule
  ]
})
export class DashboardModule { }
