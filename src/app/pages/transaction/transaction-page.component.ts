import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsProvider } from '../../common/providers/transactions.provider';

@Component({
  selector: 'transactions-page',
  templateUrl: './transaction-page.template.html'
})
export class TransactionPage {
    public transaction;
    constructor(private provider: TransactionsProvider,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.provider.
                getTransactionById(params.id).
                subscribe(transaction => {
                    this.transaction = transaction;
                });
        });
    }
}
