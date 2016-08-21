/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { MdIconRegistry } from '@angular2-material/icon';

import { Header } from './header';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [ MdIconRegistry ],
  directives: [ Header ],
  styles: [
    require('flexboxgrid/dist/flexboxgrid.min.css').toString(),
    require('./app.style.scss').toString()
  ],
  template: `
    <main class='container'>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  name = 'Mondo UI';

  constructor(public appState: AppState, mdIconRegistry: MdIconRegistry) {
      mdIconRegistry.registerFontClassAlias('material-icons', 'material-icons');
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
