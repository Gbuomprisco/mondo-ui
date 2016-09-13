import { Component } from '@angular/core';
import { TransactionsProvider } from '../../providers/transactions.provider';
import { TransactionsHelper } from './transactions.helper';

@Component({
    selector: 'transactions',
    styles: [ `
        :host {
            display: block;
        }
    ` ],
    template: '<ng-content></ng-content>'
})
export class Transactions {
    public transactions;
    public balance = {};

    public spentWeek: number;
    public spentMonth: number;

    private helper: TransactionsHelper = new TransactionsHelper();

    constructor(private provider: TransactionsProvider) {}

    public ngOnInit() {
        this.getTransactions().getBalance();
    }

    /**
     * @name getAmountsByDate
     * @returns {undefined|any}
     */
    public getAmountsByDate() {
        return this.helper.getAmountsByDate(this.transactions);
    }

    /**
     * @name getBalance
     * @returns {Transactions}
     */
    public getBalance(): Transactions {
        this.provider.getBalance().subscribe(balance => {
            this.balance = balance;
            this.provider.cache('balance', balance);
        });

        return this;
    }

    /**
     * @name getTransactions
     * @returns {Transactions}
     */
    public getTransactions(): Transactions {
        this.provider.getTransactions().subscribe(data => {
            this.transactions = data.transactions.reverse();
            this.spentWeek = this.helper.getSpentPastDays(this.transactions, 7);
            this.spentMonth = this.helper.getSpentPastDays(this.transactions, 30);
            this.provider.cache('transactions', data);
        });

        return this;
    }
}
