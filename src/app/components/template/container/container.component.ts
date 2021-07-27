import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

// 27661734000178

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  api: string = '';
  auxilios: any;
  error: null;

  found: boolean;

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
          this.error = error.messsage;
          Swal.fire('Oops...', 'Something went wrong!');
        }
      );
  }

  ngOnInit() {}
}
