import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  URL_BASE = 'http://localhost:4000'

  constructor(public _http: HttpClient) {
    console.log("El Servicio ContentService esta listo!")
  }

  getTest(){
    return this._http.get('http://localhost:4000/').pipe(
      map((resp:any) => {
        console.log("Test-Resp:: ",resp)
        return resp
      })
    )
  }

  getAllResource() {
    let url = this.URL_BASE + '/fase1/data'

    return this._http.get(url).pipe(
      map( (resp: any) => {
        console.log('service-resp: ', resp)
        return resp;
      })
    )
  }
}
