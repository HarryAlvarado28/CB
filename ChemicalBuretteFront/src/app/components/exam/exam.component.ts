import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styles: []
})
export class ExamComponent implements OnInit {
  @Input('idexam') id: string;

  constructor() { 
    console.log("Desde exam: ", this.id);

  }

  ngOnInit() {
  }

}
