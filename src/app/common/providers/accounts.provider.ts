import { XHttp } from './xhttp.provider';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare interface Account {
    id: string;
    description: string;
    created: string;
}

@Injectable()
export class AccountsProvider {
    public accounts: Account[] = [];

    constructor(public xHttp: XHttp) {}

    public getAccounts(): Observable<any> {
        const cached = localStorage.getItem('accounts');

        if (cached) {
            this.accounts = JSON.parse(cached);
            return Observable.of(this.accounts);
        }

        return this.xHttp.get('accounts');
    }

    public get account(): Account {
        return this.accounts[0];
    }
}
