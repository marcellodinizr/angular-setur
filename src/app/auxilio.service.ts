import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuxilioService {
  constructor(private http: HttpClient) {}

  fethAuxilio(): Observable<Object> {
    return this.http.get(
      'https://auxilio.turismo.ma.gov.br/api.consulta.php?busca=27661734000178/json/'
    );
  }
}

// public nomepj: string,
// public nomeresponsavel: string,
// public razaosocial: string,
// public nomefantasia: string,
// public endereco: string,
// public email: string,
// public telefone: string,
// public municipio: string
