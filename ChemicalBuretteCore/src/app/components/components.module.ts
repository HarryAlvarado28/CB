import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RefsComponent } from './refs/refs.component';
import { SabiasqueComponent } from './sabiasque/sabiasque.component';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { ButtonlevelComponent } from './buttonlevel/buttonlevel.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent,
    ButtonlevelComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    FormsModule    
  ],
  exports: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent,
    ButtonlevelComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
