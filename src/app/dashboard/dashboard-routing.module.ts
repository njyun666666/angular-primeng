import { D1Component } from './d1/d1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes =
  [
    {
      path: '', component: DashboardComponent, children:
        [
          { path: '', component: D1Component }
        ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
