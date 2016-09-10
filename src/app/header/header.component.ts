import { Component } from '@angular/core';
import { MdIcon } from '@angular2-material/icon';
import { MdMenu, MdMenuItem } from '@angular2-material/menu';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'app-header',
  directives: [ MdIcon, MdMenu, MdMenuItem, MdToolbar ],
  styles: [ require('./header.scss').toString() ],
  templateUrl: './header.template.html'
})
export class Header {}
