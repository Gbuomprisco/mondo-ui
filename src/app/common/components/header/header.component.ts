import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [ require('./header.scss').toString() ],
  templateUrl: './header.template.html'
})
export class Header {}
