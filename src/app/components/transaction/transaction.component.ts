import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction',
  styles: [ require('./transaction.scss').toString() ],
  templateUrl: './transaction.template.html'
})
export class Transaction {
    @Input() public transaction;
}
