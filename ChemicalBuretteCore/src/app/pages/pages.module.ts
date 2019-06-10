import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ProgresoComponent } from './progreso/progreso.component';

// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
      DashboardComponent,
      ProgresoComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    ComponentsModule,
    ButtonsModule,
    WavesModule,
    CardsFreeModule
  ],
  exports: [
    DashboardComponent,
    ProgresoComponent
  ]
})
export class PagesModule { }
