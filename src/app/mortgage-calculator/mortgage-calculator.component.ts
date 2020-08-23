import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

export interface ResultDialogData {
  mortgageAmount: number;
  amortizationPeriod: number;
  paymentFrequency: number;
  interestRate: number;
  totalInterestCost?: number;
}

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent implements OnInit {
  public formGroup: FormGroup;
  public titleAlert = 'This field is required';

  public amortizationPeriods = [
    {type: '20 Years', value: 20},
    {type: '25 Years', value: 25},
    {type: '30 Years', value: 30}
  ];

  public paymentFrequencies = [
    {type: 'Monthly', value: 12},
    {type: 'Semi-monthly', value: 24},
    {type: 'Bi-Weekly', value: 26},
    {type: 'Weekly', value: 52}
  ];

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Creating a mortgage form
  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      mortgageAmount: [100000, Validators.required],
      amortizationPeriod: [25],
      paymentFrequency: [12],
      interestRate: [5, Validators.required],
    });
  }

  //openResultDialog function
  public openResultDialog(): void {
    document.body.classList.add("result-dialog-modal");

    const dialogRef = this.dialog.open(ResultDialogComponent, {
      restoreFocus: true,
      panelClass: "result-dialog-modal-overlay",
      data: this.formGroup.value
    });

    dialogRef.afterClosed().subscribe(result => {
      document.body.classList.remove("result-dialog-modal");
      return true;
    });
  }

  // open result dialog on
  public onCalculate(): void {
    if (this.formGroup.valid) {
      this.openResultDialog();
    }
  }
}
