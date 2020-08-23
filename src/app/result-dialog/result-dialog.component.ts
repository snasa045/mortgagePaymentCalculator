import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ResultDialogData {
  mortgageAmount: number;
  amortizationPeriod: number;
  paymentFrequency: number;
  interestRate: number;
  totalInterestCost?: number;
}

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})

// reference formula for monthly mortgage rate = "M = P[i(1+i)^n]/[(1+i)^n -1]"

export class ResultDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResultDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ResultDialogData) {
  }

  // Data object to use for dialog view
  public finalData = [
    {name: 'Mortgage Amount:', value: `$${this.data.mortgageAmount}`},
    {name: 'Interest Rate:', value: `${this.data.interestRate}%`},
    {name: 'Amortization:', value: `${this.data.amortizationPeriod} Years`},
    {name: 'Total Interest Cost:', value: `$${this.totalInterestCost().toFixed(2)}`}
  ];

  ngOnInit(): void {}

  //Calculate APR Rate based on selection of paymentFrequency
  public aprRate(): number {
    return ((this.data.interestRate / 100) / this.data.paymentFrequency);
  }

  //Calculate Total Number of Mortgage Payments based on selection of paymentFrequency
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

  // Closing privacy policy dialog
  public onClose(): void {
    this.dialogRef.close();
  }
}
