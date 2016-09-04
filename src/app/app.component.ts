/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import { MdIconRegistry } from '@angular2-material/icon';
import { Header } from './header';
import { LoggedInGuard } from './auth/login-guard';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [ MdIconRegistry ],
  styles: [
    require('flexboxgrid/dist/flexboxgrid.min.css').toString(),
    require('./app.style.scss').toString()
  ],
  template: `
    <main class='container-fluid'>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  constructor(public appState: AppState, mdIconRegistry: MdIconRegistry) {
      mdIconRegistry.registerFontClassAlias('material-icons', 'material-icons');
  }
}
