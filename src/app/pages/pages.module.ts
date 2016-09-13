import { NgModule } from '@angular/core';
import { CommonComponents } from './common/components';
import { AngularMaterialModule } from './angular-material.module';
import { Dashboard } from './dashboard';
import { Auth } from './auth';
import { TransactionsPage } from './transactions';
import { TransactionPage } from './transaction';

const APP_COMPONENTS = [
    Dashboard,
    Auth,
    TransactionsPage,
    TransactionPage
];

@NgModule({
    declarations: [
        ...APP_COMPONENTS
    ],
    imports: [
        AngularMaterialModule,
        CommonComponents
    ]
})
export class PagesModule {

}
