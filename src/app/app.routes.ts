import { RouterConfig } from '@angular/router';

import { Dashboard } from './dashboard';
import { TransactionPage } from './transaction';
import { TransactionsPage } from './transactions';
import { Auth } from './auth';
import { LoggedInGuard } from './auth/login-guard';

export const routes: RouterConfig = [
    {
        path: '',
        component: Dashboard,
        canActivate: [ LoggedInGuard ]
    },
    {
        path: 'transactions',
        component: TransactionsPage,
        canActivate: [ LoggedInGuard ]
    },
    {
        path: 'transactions/:id',
        component: TransactionPage,
        canActivate: [ LoggedInGuard ]
    },
    {
        path: 'auth',
        component: Auth,
    },
    {
        path: 'auth/oauth/callback',
        component: Auth,
    }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'Transactions': require('es6-promise-loader!./transactions'),
  'Transaction': require('es6-promise-loader!./transaction'),
  'Auth': require('es6-promise-loader!./auth'),
  'Dashboard': require('es6-promise-loader!./dashboard'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [

   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
