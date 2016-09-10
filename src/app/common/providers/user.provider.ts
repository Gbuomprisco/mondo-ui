import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
    public isLoggedIn(): boolean {
        return !!localStorage.getItem('access_token');
    }

    public get accountId(): string {
        return localStorage.getItem('account_id');
    }
}
