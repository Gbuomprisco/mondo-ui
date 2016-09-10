import { XHttp } from './xhttp.provider';
import { Injectable } from '@angular/core';

declare interface Account {
    id: string;
    description: string;
    created: string;
}

@Injectable()
export class AccountsProvider {
    public accounts: Account[] = [];

    constructor(private xHttp: XHttp) {}

    public getAccounts(callback?): void {
        const cached = localStorage.getItem('accounts');

        if (cached) {
            this.accounts = JSON.parse(cached);
            return;
        }

        this.xHttp.get('accounts').subscribe(accounts => {
            this.accounts = accounts.accounts;

            this.xHttp.cache.put('accounts', accounts);

            localStorage.setItem('accounts', JSON.stringify(accounts));

            if (callback) {
                callback();
            }
        }).unsubscribe();
    }

    public get account(): Account {
        return this.accounts[0];
    }
}
