// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { xHttp } from './xhttp.provider';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  xHttp
];
