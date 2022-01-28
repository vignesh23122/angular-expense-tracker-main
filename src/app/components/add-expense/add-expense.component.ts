import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense.model';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/util/AppConstants';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  addExpenseForm: FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]),
    note: new FormControl('',[Validators.maxLength(256)]),
    amount: new FormControl('',[Validators.required,Validators.min(1)]),
    category: new FormControl('',[Validators.required])
  });

  isCreated: boolean=false;

  categories: string[] = AppConstants.EXPENSE_CATEGORIES;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.protectedRouting();
  }

  onSubmit(){
    this.isCreated=false;
    if(this.addExpenseForm.valid){
      const value = this.addExpenseForm.value;
      const expense:Expense = {
        id:-1,
        title:value.title,
        note:value.note,
        amount:value.amount,
        category:value.category,
        createdAt:''
      };

      this.userService.addExpense(expense).subscribe((exp:Expense)=>this.isCreated=true);

    }
  }

  get title(){return this.addExpenseForm.get('title');}

  get note(){return this.addExpenseForm.get('note');}

  get amount(){return this.addExpenseForm.get('amount');}

  get category(){return this.addExpenseForm.get('category');}


}
