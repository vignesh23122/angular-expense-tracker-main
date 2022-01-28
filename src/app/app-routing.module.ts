import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CategoryWiseAnalysisComponent } from './components/category-wise-analysis/category-wise-analysis.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { ViewAllExpensesComponent } from './components/view-all-expenses/view-all-expenses.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"signup",
    component:SignUpPageComponent
  },
  {
    path:"balance/view",
    component:BalanceComponent
  },
  {
    path:"balance/add",
    component:AddBalanceComponent
  },
  {
    path:"expense/add",
    component:AddExpenseComponent
  },
  {
    path:"expense/all",
    component:ViewAllExpensesComponent
  },
  {
    path:"expense/analysis/category",
    component:CategoryWiseAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
