import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard';
import { Auth } from './auth';
import { TransactionsPage } from './transactions';
import { TransactionPage } from './transaction';
import { LineChart, Header, Transaction, Transactions } from '../common/components';
import { MaterialRootModule } from '../angular-material.module';


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
    entryComponents: [
        ...APP_PAGES,
    ],
    declarations: [
        ...APP_PAGES,
        ...APP_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialRootModule.forRoot()
    ],
    exports: [
        ...APP_PAGES,
        ...APP_COMPONENTS,
        MaterialRootModule
    ]
})
export class PagesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModuleWithProviders
        };
    }
}
