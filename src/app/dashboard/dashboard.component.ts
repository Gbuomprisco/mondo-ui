import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Transactions } from '../components/transactions';

@Component({
  selector: 'dashboard',
  providers: [],
  directives: [ Transactions ],
  styleUrls: [ './dashboard.style.css' ],
  templateUrl: './dashboard.template.html'
})
export class Dashboard {}
