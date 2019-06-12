import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {
  @Input() cont : any[]
  contIn: any
  list: any
  // objeto: any;
  constructor(private _containerService: ContentService) {
    console.log("cont: ",this.cont)
    // this._containerService.getTest()
    //   .subscribe((resp:any)=>{
    //     console.log("Content-Resp ",resp)
    //   })
    // this._containerService.getAllResource()
    //   .subscribe((resp:any)=>{
    //     this.contIn = resp
    //     this.list = this.contIn.area[0].titulo[0].subtitulo[1].listado
    //     console.log("getAllResource, Content-Resp ", this.contIn)
    //     console.log("getAllResource, Content-Resp ", this.list)
    // })
    // console.log('Objeto: ', this.objeto)
  }

  ngOnInit() {
    this._containerService.getAllResource()
      .subscribe((resp:any)=>{
        this.contIn = resp
        this.list = this.contIn.area[0].titulo[0].subtitulo[1].listado
        console.log("getAllResource, Content-Resp ", this.contIn)
        console.log("getAllResource, Content-Resp ", this.list)
    })
  }

}
