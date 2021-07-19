import { Component } from '@angular/core';

import { AuxilioService } from './auxilio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-setur';

  constructor(private auxilioService: AuxilioService) {}
  fethAuxilio() {
    this.auxilioService.fethAuxilio();
  }
}
