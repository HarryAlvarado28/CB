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

  constructor(private _containerService: ContentService) {
    console.log("cont: ",this.cont)
  }

  ngOnInit() {
    
    this._containerService.getAllResource()
      .subscribe((resp:any) => {
        console.log("LOL:::: ", resp)
        this.guardarStorage(resp)
        this.contIn = resp
        this.list = this.contIn.area[0].titulo[0].subtitulo[1].listado
        console.log("getAllResource, Content-Resp ", this.contIn)
        console.log("getAllResource, Content-Resp ", this.list)
    })

  }

  guardarStorage(cool_data: any){
    localStorage.setItem('data',JSON.stringify(cool_data));
  }

}
