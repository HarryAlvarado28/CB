import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styles: []
})
export class ExamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  template = false;
  getCheckboxesValue(){
    console.log("valor: ", this.template)
  }

}
