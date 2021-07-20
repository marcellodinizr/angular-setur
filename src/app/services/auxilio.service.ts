import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuxilioService {
  constructor(private http: HttpClient) {}

  public getAuxilio(): Observable<any> {
    return this.http.get(
      'https://auxilio.turismo.ma.gov.br/api.consulta.php?busca=21430916000151/json/'
    );
  }
}

