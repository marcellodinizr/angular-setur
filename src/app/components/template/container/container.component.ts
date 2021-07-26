import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  api: string = '';
  auxilios: any;
  erro: any;

  found: boolean;

  // openForm() {
  //   const element: HTMLElement = document.getElementById('formulario')!;
  //   element.setAttribute('style', 'display: block;');
  // }

  constructor(private httpClient: HttpClient) {}

  onNameKeyUp(event: any) {
    this.api = event.target.value;
    this.found = false;
  }

  getApi() {
    this.httpClient
      .get(
        `https://auxilio.turismo.ma.gov.br/api.consulta.php?busca=${this.api}/json/`
      )
      .subscribe(
        (data: any) => {
          this.auxilios = data.busca;
        },
        (error) => {
          this.erro = error;
          console.error('Error: ', error);
        }
      );
  }

  ngOnInit() {}
}
