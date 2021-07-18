import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-setur';

  openForm() {
    const element: HTMLElement = document.getElementById('formulario')!;
    element.setAttribute('style', 'display: block;');
  }
}
