import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styles: [ require('./header.scss').toString() ],
  templateUrl: './header.template.html'
})
export class Header {
    constructor(private router: Router) {}

    public logout() {
        localStorage.clear();
        this.router.navigateByUrl('/auth');
    }
}
