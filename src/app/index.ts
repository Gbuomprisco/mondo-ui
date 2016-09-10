// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { XHttp } from './common/providers/xhttp.provider';
import { LoggedInGuard, AccountsResolver } from './auth';
import { UserProvider } from './common/providers/user.provider';
import { AccountsProvider } from './common/providers/accounts.provider';

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    XHttp,
    LoggedInGuard,
    AccountsResolver,
    UserProvider,
    AccountsProvider
];
