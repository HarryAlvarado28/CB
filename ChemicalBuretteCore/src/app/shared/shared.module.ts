import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
