import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RefsComponent } from './refs/refs.component';
import { SabiasqueComponent } from './sabiasque/sabiasque.component';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    WavesModule,
    CardsFreeModule
  ],
  exports: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent
  ]
})
export class ComponentsModule { }
