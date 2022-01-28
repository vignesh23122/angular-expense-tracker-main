import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BalanceComponent } from './components/balance/balance.component';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ViewAllExpensesComponent } from './components/view-all-expenses/view-all-expenses.component';
import { CategoryWiseAnalysisComponent } from './components/category-wise-analysis/category-wise-analysis.component'
import { NgChartsModule } from 'ng2-charts';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    LoginPageComponent,
    BalanceComponent,
    AddBalanceComponent,
    AddExpenseComponent,
    ViewAllExpensesComponent,
    CategoryWiseAnalysisComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
