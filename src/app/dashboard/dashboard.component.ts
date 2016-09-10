import { Component } from '@angular/core';
import { Transactions } from '../common/components/transactions';
import { LineChart } from '../common/components/charts/line-chart';
import { Header } from '../header';

@Component({
  selector: 'dashboard',
  providers: [],
  directives: [ Header, Transactions, LineChart ],
  styles: [ require('./dashboard.style.scss').toString() ],
  templateUrl: './dashboard.template.html'
})
export class Dashboard {

}
