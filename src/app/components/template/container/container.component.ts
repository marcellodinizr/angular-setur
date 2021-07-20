import { Component, OnInit } from '@angular/core';
import { Auxilios } from 'src/app/models/auxilio.model';
import { AuxilioService } from 'src/app/services/auxilio.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  auxilios: any;
  erro: any;
  constructor(private auxilioService: AuxilioService) {
    this.getter();
  }

  openForm() {
    const element: HTMLElement = document.getElementById('formulario')!;
    element.setAttribute('style', 'display: block;');
  }

  ngOnInit() {}
  getter() {
    this.auxilioService.getAuxilio().subscribe(
      (data: Auxilios) => {
        this.auxilios = data.busca;
        console.log('O data recebido:', data.busca);
        console.log('A variavel preenchida:', this.auxilios);
      },
      (error) => {
        this.erro = error;
        console.error('Error: ', error);
      }
    );
  }
}
