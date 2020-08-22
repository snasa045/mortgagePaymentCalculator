import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

const routes: Routes = [
  {
    path: '', component: MortgageCalculatorComponent,
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
  RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }


