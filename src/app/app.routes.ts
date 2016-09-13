import { Dashboard } from './pages/dashboard';
import { TransactionPage } from './pages/transaction';
import { TransactionsPage } from './pages/transactions';
import { Auth, LoggedInGuard, AccountsResolver } from './pages/auth';

export const ROUTES = [
    {
        path: '',
        component: Dashboard,
        canActivate: [ LoggedInGuard ],
        resolve: {
            accounts: AccountsResolver
        }
    },
    {
        path: 'transactions',
        component: TransactionsPage,
        canActivate: [ LoggedInGuard ],
        resolve: {
            accounts: AccountsResolver
        }
    },
    {
        path: 'transactions/:id',
        component: TransactionPage,
        canActivate: [ LoggedInGuard ],
        resolve: {
            accounts: AccountsResolver
        }
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
  'Transactions': require('es6-promise-loader!./pages/transactions'),
  'Transaction': require('es6-promise-loader!./pages/transaction'),
  'Auth': require('es6-promise-loader!./pages/auth'),
  'Dashboard': require('es6-promise-loader!./pages/dashboard'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [

   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
