import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResultDialogData } from '../mortgage-calculator/mortgage-calculator.component';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResultDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ResultDialogData) {
  }

  public finalData = [
    {name: 'Mortgage Amount:', value: `$${this.data.mortgageAmount}`},
    {name: 'Interest Rate:', value: `${this.data.interestRate}%`},
    {name: 'Amortization:', value: `${this.data.amortizationPeriod} Years`},
    {name: 'Total Interest Cost:', value: `$${this.totalInterestCost().toFixed(2)}`}
  ];

  ngOnInit(): void {
    console.log('data', this.data);
    console.log('aprMonthly', this.aprRate());
    console.log('numOfPayments', this.numOfPayments().toFixed(2));
    console.log('interestPayments', this.interestPayments().toFixed(2));
    console.log('mortgagePayment', this.mortgagePayment().toFixed(2));
    console.log('totalInterestCost', this.totalInterestCost().toFixed(2));
  }

  //Calculate APR Rate
  public aprRate(): number {
    return ((this.data.interestRate / 100) / this.data.paymentFrequency);
  }

  //Calculate Total Number of Mortgage Payments
  public numOfPayments(): number{
    return (this.data.amortizationPeriod * this.data.paymentFrequency);
  }

  //Calculate term (1+i)^n or interestPayments^numberOfPayments
  public interestPayments(): number{
    return Math.pow(1 + this.aprRate(), this.numOfPayments());
  }

  //Calculate mortgage payment
  public mortgagePayment(): number{
    return (this.data.mortgageAmount * (this.aprRate() * this.interestPayments()) / (this.interestPayments() - 1));
  }

  // Calculate Total Interest Cost
  public totalInterestCost(): number {
    return this.data.totalInterestCost = ((this.mortgagePayment() * this.numOfPayments()) - this.data.mortgageAmount);
  }

  // closing privacy policy dialog
  public close(): void {
    this.dialogRef.close();
  }
}
