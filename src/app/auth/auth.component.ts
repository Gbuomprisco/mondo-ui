import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  providers: [ ],
  templateUrl: './auth.template.html'
})
export class Auth {
    constructor(private router: Router) {}

    ngOnInit() {}
}
