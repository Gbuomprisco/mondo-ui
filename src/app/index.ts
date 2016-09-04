// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { xHttp } from './xhttp.provider';
import { LoggedInGuard } from './auth/login-guard';
import { UserService } from './common/services/user.service';


// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  xHttp,
  LoggedInGuard,
  UserService
];
