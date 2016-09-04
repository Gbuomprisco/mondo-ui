import { Injectable } from '@angular/core';
import { xHttp } from '../../xhttp.provider';
import { URLSearchParams } from '@angular/http';

const options = `account_id=acc_00009BLI1ebkiK3Lky8rRZ`;

@Injectable()
export class TransactionsProvider {
    private urls = {
        balance: () => `balance?${options}`,
        transactions: () => `transactions?${options}`,
        transaction: (id: string) => `transactions/${id}`
    };

    constructor(public xHttp: xHttp) {}

    public getTransactions() {
        return this.xHttp.get(this.urls.transactions());
    }

    public getTransactionById(id: string) {
        return this.xHttp.get(this.urls.transaction(id));
    }

    public getBalance() {
        return this.xHttp.get(this.urls.balance());
    }

    public cache(subject, data) {
        const url = this.urls[subject]();
        this.xHttp.cache.put(url, data);
    }
}
