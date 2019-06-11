import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttonlevel',
  templateUrl: './buttonlevel.component.html',
  styles: []
})
export class ButtonlevelComponent implements OnInit {

  cursor = 0;

  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onBack(){
    if (this.cursor > 0) this.cursor -= 1;
    this.change.emit(this.cursor);
  }

  onNext(){
    this.cursor += 1
    this.change.emit(this.cursor);
  }

}
