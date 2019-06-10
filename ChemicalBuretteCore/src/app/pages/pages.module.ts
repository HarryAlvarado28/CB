import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
      DashboardComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
  ],
  exports: [

  ]
})
export class PagesModule { }
