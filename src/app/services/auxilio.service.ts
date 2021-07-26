import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 27661734000178

@Injectable({
  providedIn: 'root',
})
export class AuxilioService {
  constructor(private http: HttpClient) {}

  // public buttonSearch = <HTMLElement>document.getElementById('button-search');
  // cadastur = (<HTMLInputElement>document.querySelector('#cadastur')).value;

  public getAuxilio(): Observable<any> {
    const search = 27661734000178;
    return this.http.get(
      `https://auxilio.turismo.ma.gov.br/api.consulta.php?busca=${search}/json/`
    );
  }
}
