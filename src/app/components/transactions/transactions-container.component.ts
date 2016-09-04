import {Component} from '@angular/core';
import {TransactionsProvider} from './transactions.provider';
import {TransactionsHelper} from './transactions.helper';

@Component({
    selector: 'transactions',
    providers: [TransactionsProvider, TransactionsHelper],
    directives: [],
    styles: [`
        :host {
            display: block;
        }
    `],
    template: '<ng-content></ng-content>'
})
export class Transactions {
    public transactions;
    public balance = {};

    public spentWeek: number;
    public spentMonth: number;
    public limit: number;

    constructor(
        private provider: TransactionsProvider,
        private helper: TransactionsHelper
    ) {}

    private ngOnInit() {
         this.getTransactions().getBalance();
    }

    public getAmountsByDate() {
        return this.helper.getAmountsByDate(this.transactions);
    }

    public getBalance(): Transactions {
        this.provider.getBalance().
            subscribe(balance => {
                this.balance = balance;
                this.provider.cache('balance', balance);
            });

        return this;
    }

    public getTransactions(): Transactions {
        this.provider.getTransactions().
            subscribe(data => {
                this.transactions = data.transactions.reverse();
                this.spentWeek = this.helper.getSpentPastDays(this.transactions, 7);
                this.spentMonth = this.helper.getSpentPastDays(this.transactions, 30);
                this.provider.cache('transactions', data);
            });

        return this;
    }
}
