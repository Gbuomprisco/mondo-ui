import { Injectable } from '@angular/core';
import { xHttp } from '../../xhttp.provider';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class TransactionsProvider {
    constructor(private xHttp: xHttp) {}

    public getTransactions() {
        const options = `account_id=acc_00009BLI1ebkiK3Lky8rRZ`;
        const url = `transactions?${options}`;
        return this.xHttp.get(url);
    }

    public getTransactionById(id: string) {
        const options = `account_id=acc_00009BLI1ebkiK3Lky8rRZ`;
        const url = `transactions/${id}`;
        return this.xHttp.get(url);
    }
}
