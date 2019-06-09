import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { ContentComponent } from './content/content.component';
import { RefsComponent } from './refs/refs.component';
import { SabiasqueComponent } from './sabiasque/sabiasque.component';
import { ExamComponent } from './exam/exam.component';


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
      ContentComponent,
      RefsComponent,
      SabiasqueComponent,
      ExamComponent
  ],
  providers: [],
  exports: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent,
    ExamComponent
  ]
})
export class ComponentsModule { }
