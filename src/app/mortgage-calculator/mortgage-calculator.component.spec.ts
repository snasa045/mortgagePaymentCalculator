import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MaterialModule } from '../../material-module';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorComponent ],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
});

  it('should create a form with 4 controls', () => {
    expect(component.formGroup.contains('mortgageAmount')).toBeTruthy();
    expect(component.formGroup.contains('amortizationPeriod')).toBeTruthy();
    expect(component.formGroup.contains('paymentFrequency')).toBeTruthy();
    expect(component.formGroup.contains('interestRate')).toBeTruthy();
  });

  it('should make the mortgageAmount and interestRate controls required', () => {
    let mortgageAmountControl = component.formGroup.get('mortgageAmount');
    let interestRateControl = component.formGroup.get('interestRate');

    mortgageAmountControl.setValue('');
    interestRateControl.setValue('');

    expect(mortgageAmountControl.valid).toBeFalsy();
    expect(interestRateControl.valid).toBeFalsy();
  });
});
