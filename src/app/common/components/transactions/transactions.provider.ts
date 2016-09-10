import { Injectable } from '@angular/core';
import { XHttp } from '../../providers/xhttp.provider';
import { AccountsProvider } from '../../providers/accounts.provider';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class TransactionsProvider {
    private urls = {
        balance: (accountId: string) => `balance?${accountId}`,
        transactions: (accountId: string) => `transactions?${accountId}`,
        transaction: (id: string) => `transactions/${id}`
    };

    constructor(public xHttp: XHttp,
                private accountsProvider: AccountsProvider) {
    }

    /**
     * @name getTransactions
     * @returns {Observable<any>}
     */
    public getTransactions(): Observable<any> {
        const accountId = `account_id=${this.accountsProvider.account.id}`;
        return this.xHttp.get(this.urls.transactions(accountId));
    }

    /**
     * @name getTransactionById
     * @param id
     * @returns {Observable<any>}
     */
    public getTransactionById(id: string): Observable<any> {
        return this.xHttp.get(this.urls.transaction(id));
    }

    /**
     * @name getBalance
     * @returns {Observable<any>}
     */
    public getBalance(): Observable<any> {
        const accountId = `account_id=${this.accountsProvider.account.id}`;
        return this.xHttp.get(this.urls.balance(accountId));
    }

    /**
     * @name cache
     * @param subject
     * @param data
     */
    public cache(subject, data) {
        const url = this.urls[ subject ]();
        this.xHttp.cache.put(url, data);
    }
}
