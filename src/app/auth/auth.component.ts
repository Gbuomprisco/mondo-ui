import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { DomSanitizationService, SafeUrl } from '@angular/platform-browser';
import { Http, Headers } from '@angular/http';
import { UserProvider } from '../common/providers/user.provider';
import { AccountsProvider } from '../common/providers/accounts.provider';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'auth',
    directives: [ MdButton ],
    templateUrl: './auth.template.html',
    styles: [ `
      :host {
          position: fixed;
          top: 35%;
          width: 100%;
          align-items: center;
          height: 90vh;
          display: flex;
          flex-direction: column;
      }
  ` ]
})
export class Auth {
    private stateToken: string = process.env.STATE_TOKEN;
    private clientId: string = process.env.CLIENT_ID;
    private redirectUri: string = process.env.REDIRECT_URI;
    private clientSecret: string = process.env.CLIENT_SECRET;

    private state = {
        loggingIn: false
    };

    constructor(private router: Router,
                private http: Http,
                private user: UserProvider,
                private accounts: AccountsProvider,
                private sanitizer: DomSanitizationService) {
    }

    public ngOnInit() {
        const stateToken = this.stateToken,
            isLoggedIn = this.user.isLoggedIn();

        if (isLoggedIn) {
            this.router.navigate([ '' ]);
            return;
        }

        this.router.routerState.queryParams.subscribe(params => {
            const code: string = params[ 'code' ],
                state: string = params[ 'state' ];

            if (!code || (state !== stateToken)) {
                return;
            }

            this.state.loggingIn = true;

            /* fetch access token */
            this.getAuthKey(code).subscribe((data: any) => {
                this.storeAccessToken(data.access_token);
                this.state.loggingIn = false;

                /* redirect to home page */
                this.router.navigate([ '' ]);
            });
        });
    }

    /**
     * @name getAuthKey
     * @param code
     * @returns {Observable<any>}
     */
    public getAuthKey(code: string): Observable<any> {
        const url = 'https://api.monzo.com/oauth2/token';
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        const params =
            'grant_type=authorization_code' +
            '&client_id=' + this.clientId +
            '&client_secret=' + this.clientSecret +
            '&redirect_uri=' + this.redirectUri +
            '&code=' + code;

        return this.http.post(url, params, {
            headers
        }).map(r => r.json());
    }


    public get link(): SafeUrl {
        const url: string = 'https://auth.getmondo.co.uk/?';

        return url +
            'client_id=' + this.clientId +
            '&redirect_uri=' + this.redirectUri +
            '&response_type=code' +
            '&state=' + this.stateToken;
    }

    public sanitize(url: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    private storeAccessToken(token: string): void {
        localStorage.setItem('access_token', token);
    }
}
