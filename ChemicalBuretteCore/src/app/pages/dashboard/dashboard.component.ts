import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contenidoBase = []

  constructor(private _containerService: ContentService) {
    // this._containerService.getAllResource()
    //   .subscribe((resp:any)=>{

    //     this.contenidoBase = resp
    //     console.log("getAllResource, Content-Resp ", this.contenidoBase)

    // })

  }
  lol(event:any){
    this.contenidoBase = [0,event,0]
    console.log("DASHBOARD-event: ",event, " ::: ", this.contenidoBase)
  }

  ngOnInit() {
    // let lists = contIn.area[0].titulo[0].subtitulo[1].listado
    this.contenidoBase = [0,0,0]
  }

}
