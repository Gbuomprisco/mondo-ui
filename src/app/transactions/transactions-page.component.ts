import { Component } from '@angular/core';
import { Transactions } from '../common/components/transactions';
import { Header } from '../header';

@Component({
    selector: 'transactions-page',
    templateUrl: './transactions-page.template.html',
    directives: [ Transactions, Header ]
})
export class TransactionsPage {

}
