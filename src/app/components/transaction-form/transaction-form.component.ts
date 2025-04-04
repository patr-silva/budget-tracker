import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {
  transactionForm = new FormGroup({
    type: new FormControl(),
    description: new FormControl(),
    amount: new FormControl(),
  });

  constructor(private transactionService: TransactionService) {}

  onSubmit() {
    //console.log(this.transactionForm);
    this.transactionService.addTransaction(this.transactionForm.value);
  }
}
