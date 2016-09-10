import { AccountsProvider } from '../common/providers/accounts.provider';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountsResolver implements Resolve<any> {
    constructor(private accountsProvider: AccountsProvider) {}

    public resolve(): Observable<any> {
        return Observable.fromPromise(new Promise(resolve => {
            this.accountsProvider
                .getAccounts()
                .subscribe(accounts => {
                    this.accountsProvider.accounts = accounts.accounts;
                    this.accountsProvider.xHttp.cache.put('accounts', accounts);
                    localStorage.setItem('accounts', JSON.stringify(accounts));

                    resolve();
                });
        }));
    }
}

