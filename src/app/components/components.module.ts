import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  imports: [
    CommonModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
