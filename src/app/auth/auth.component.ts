import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { DomSanitizationService, SafeUrl } from '@angular/platform-browser';
import { Http, Headers } from '@angular/http';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'auth',
  directives: [ MdButton ],
  templateUrl: './auth.template.html',
  styles: [`
      :host {
          position: fixed;
          top: 35%;
          width: 100%;
          align-items: center;
          height: 90vh;
          display: flex;
          flex-direction: column;
      }
  `]
})
export class Auth {
    private state_token: string = '123';
    private client_id: string = 'oauthclient_00009BwxK4Q8lb6cgxq1i5';
    private redirect_uri: string = 'https://wonzo.localtunnel.me/auth/oauth/callback';
    private client_secret: string = 'zxIqqSTSFulme0wxkgXi3ZoCmRKSqX/i4Xry8xKYOc8jWrEKfTQ8q0ico8NtLkKV9nRXbAKbMxITErw9JC42';

    constructor(
        private router: Router,
        private http: Http,
        private user: UserService,
        private sanitizer: DomSanitizationService) {}

    private ngOnInit() {
        const stateToken = this.state_token,
            isLoggedIn = this.user.isLoggedIn();

        if (isLoggedIn) {
            this.router.navigate(['']);
            return;
        }

        const params = this.router.routerState.queryParams.subscribe(params => {
            const code: string = params['code'],
                  state: string = params['state'];

            if (!code || (state !== stateToken)) {
                return;
            }

            this.getAuthKey(code).subscribe(data => {
                this.storeData(data.access_token, data.account_id);
                this.router.navigate(['']);
            });
        });
    }

    public getAuthKey(code: string) {
        const url = 'https://api.monzo.com/oauth2/token';
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        const params =
            'grant_type=authorization_code' +
            '&client_id=' + this.client_id +
            '&client_secret=' + this.client_secret +
            '&redirect_uri=' + this.redirect_uri +
            '&code=' + code;

        return this.http.post(url, params, {
            headers
        }).map(r => r.json());
    }

    public get link(): SafeUrl {
        const url: string = 'https://auth.getmondo.co.uk/?';

        return `
            ${url}client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=code&state=${this.state_token}
        `;
    }

    public sanitize(url: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    private storeData(token: string, accountId: string) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('account_id', accountId);
    }
}
