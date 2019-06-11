import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  objeto: any;
  constructor(private _containerService: ContentService) {
    // this._containerService.getTest()
    //   .subscribe((resp:any)=>{
    //     console.log("Content-Resp ",resp)
    //   })
    this._containerService.getAllResource()
      .subscribe((resp:any)=>{
      console.log("getAllResource, Content-Resp ", resp)
    })
    console.log('Objeto: ', this.objeto)
  }

  ngOnInit() { }

}
