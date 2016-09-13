import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard';
import { Auth } from './auth';
import { TransactionsPage } from './transactions';
import { TransactionPage } from './transaction';
import { LineChart, Header, Transaction, Transactions } from '../common/components';

const APP_PAGES = [
    Dashboard,
    Auth,
    TransactionsPage,
    TransactionPage
];

const APP_COMPONENTS = [
    LineChart,
    Header,
    Transaction,
    Transactions
];

@NgModule({
    declarations: [
        ...APP_PAGES,
        ...APP_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...APP_PAGES,
        ...APP_COMPONENTS
    ]
})
export class PagesModule {}
