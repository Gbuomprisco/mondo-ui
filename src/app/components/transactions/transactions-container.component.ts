import {Component} from '@angular/core';
import {TransactionsProvider} from './transactions.provider';

@Component({
    selector: 'transactions',
    providers: [TransactionsProvider],
    directives: [],
    styles: [`
        :host {
            display: block;
        }
    `],
    template: '<ng-content></ng-content>'
})
export class Transactions {
    public transactions;

    constructor(private provider: TransactionsProvider) {

    }

    public getAmountsByDate() {
        return this.transactions.
            map(transaction => {
                return {
                    value: transaction.account_balance / 100,
                    currency: transaction.currency,
                    key: new Date(transaction.created)
                };
        }).sort((prev, next) => next.key.getTime() > prev.key.getTime());
    }

    ngOnInit() {
        /*
         this.provider.getTransactions().
         map(data => data.json()).
         subscribe(data => {
         this.transactons = data.data;
         });
         */
        this.transactions = [
            {
                "id": "tx_00009BLIEXIZCYSSqqJJy5",
                "created": "2016-08-16T17:38:51.477Z",
                "description": "Initial top up",
                "amount": 10000,
                "currency": "GBP",
                "merchant": null,
                "notes": "",
                "metadata": {"is_topup": "true"},
                "account_balance": 10000,
                "attachments": [],
                "category": "mondo",
                "is_load": true,
                "settled": "2016-08-16T17:38:51.477Z",
                "local_amount": 10000,
                "local_currency": "GBP",
                "updated": "2016-08-16T17:38:51.763Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901137529640",
                "originator": false,
                "include_in_spending": false
            },
            {
                "id": "tx_00009BRpdvyz1hk7UGWAvB",
                "created": "2016-08-19T21:21:29.51Z",
                "description": "IZ *Libreria           London        GBR",
                "amount": -600,
                "currency": "GBP",
                "merchant": "merch_000095kqdMCHadOd3sE1Vh",
                "notes": "",
                "metadata": {},
                "account_balance": 9400,
                "attachments": [],
                "category": "entertainment",
                "is_load": false,
                "settled": "",
                "local_amount": -600,
                "local_currency": "GBP",
                "updated": "2016-08-19T21:21:29.351Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901160819047469010495",
                "originator": false,
                "include_in_spending": true
            },
            {
                "id": "txx_00009BRpdvyz1hk7UGWAvB",
                "created": "2016-08-20T21:21:29.51Z",
                "description": "Brewdog",
                "amount": -1000,
                "currency": "GBP",
                "merchant": "merch_000095kqdMCHadOd3sE1Vh",
                "notes": "",
                "metadata": {},
                "account_balance": 8400,
                "attachments": [],
                "category": "entertainment",
                "is_load": false,
                "settled": "",
                "local_amount": -1000,
                "local_currency": "GBP",
                "updated": "2016-08-19T21:21:29.351Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901160819047469010495",
                "originator": false,
                "include_in_spending": true
            },
            {
                "id": "txx_00009BRpdvyz1hk7UGWAvB",
                "created": "2016-08-22T21:21:29.51Z",
                "description": "Beeerz",
                "amount": -3400,
                "currency": "GBP",
                "merchant": "merch_000095kqdMCHadOd3sE1Vh",
                "notes": "",
                "metadata": {},
                "account_balance": 5400,
                "attachments": [],
                "category": "entertainment",
                "is_load": false,
                "settled": "",
                "local_amount": -3400,
                "local_currency": "GBP",
                "updated": "2016-08-19T21:21:29.351Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901160819047469010495",
                "originator": false,
                "include_in_spending": true
            },
            {
                "id": "txx_00009BRpdvyz1hk7UGWAvB",
                "created": "2016-08-21T21:21:29.51Z",
                "description": "Top up",
                "amount": 2000,
                "currency": "GBP",
                "merchant": "merch_000095kqdMCHadOd3sE1Vh",
                "notes": "",
                "metadata": {},
                "account_balance": 7400,
                "attachments": [],
                "category": "entertainment",
                "is_load": true,
                "settled": "",
                "local_amount": 2000,
                "local_currency": "GBP",
                "updated": "2016-08-19T21:21:29.351Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901160819047469010495",
                "originator": false,
                "include_in_spending": true
            },
            {
                "id": "txx_00009BRpdvyz1hk7UGWAvB",
                "created": "2016-08-24T21:21:29.51Z",
                "description": "Top uppppp",
                "amount": 4200,
                "currency": "GBP",
                "merchant": "merch_000095kqdMCHadOd3sE1Vh",
                "notes": "",
                "metadata": {},
                "account_balance": 11400,
                "attachments": [],
                "category": "entertainment",
                "is_load": true,
                "settled": "",
                "local_amount": 4200,
                "local_currency": "GBP",
                "updated": "2016-08-19T21:21:29.351Z",
                "account_id": "acc_00009BLI1ebkiK3Lky8rRZ",
                "counterparty": {},
                "scheme": "gps_mastercard",
                "dedupe_id": "729234901160819047469010495",
                "originator": false,
                "include_in_spending": true
            }
        ].reverse();
    }
}
