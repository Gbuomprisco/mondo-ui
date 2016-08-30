import { Component } from '@angular/core';
import { Transactions } from '../components/transactions';
import { LineChart } from '../components/charts/line-chart';

@Component({
  selector: 'dashboard',
  providers: [],
  directives: [ Transactions, LineChart ],
  styles: [ require('./dashboard.style.scss').toString() ],
  templateUrl: './dashboard.template.html'
})
export class Dashboard {

}
