import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  openForm() {
    const element: HTMLElement = document.getElementById('formulario')!;
    element.setAttribute('style', 'display: block;');
  }

  constructor() {}

  ngOnInit(): void {}
}
