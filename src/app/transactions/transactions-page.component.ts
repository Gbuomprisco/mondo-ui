import { Component } from '@angular/core';
import { Transactions } from '../components/transactions';

@Component({
    selector: 'transactions-page',
    templateUrl: './transactions-page.template.html',
    directives: [ Transactions ]
})
export class TransactionsPage {

}
