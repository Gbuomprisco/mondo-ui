import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public isLoggedIn(): boolean {
        return !!localStorage.getItem('access_token');
    }
}
