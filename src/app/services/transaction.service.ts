import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private storageKey: string = 'transactions';

  constructor() {}

  private loadTransactions(): void {
    const storedTransactions = localStorage.getItem(this.storageKey);
    this.transactions = storedTransactions
      ? JSON.parse(storedTransactions)
      : [];
  }

  private saveTransactions(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.transactions));
  }

  addTransaction(transaction: any) {
    const newTransaction: Transaction = {
      ...transaction,
      id: uuid(),
      date: new Date(),
    };

    this.transactions.push(newTransaction);
    this.saveTransactions();

    console.log(newTransaction);
  }

  deleteTransaction(id: number) {}
  updateTransaction(id: number) {}
  getBalance() {}
}
