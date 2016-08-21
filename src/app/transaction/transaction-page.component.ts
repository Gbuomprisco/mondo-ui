import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TransactionsProvider } from '../components/transactions/transactions.provider';

@Component({
  selector: 'transactions-page',
  providers: [ TransactionsProvider ],
  templateUrl: './transaction-page.template.html'
})
export class TransactionPage {
    public transaction;
    constructor(private provider: TransactionsProvider,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.provider.
                getTransactionById(+params.id).
                subscribe(transaction => {
                    this.transaction = transaction;
                });
        });
    }
}
