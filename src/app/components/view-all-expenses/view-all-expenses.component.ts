import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-all-expenses',
  templateUrl: './view-all-expenses.component.html',
  styleUrls: ['./view-all-expenses.component.css']
})
export class ViewAllExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.protectedRouting();
    this.userService.fetchAllExpenses().subscribe((exps:Expense[])=>this.expenses=exps);
  }

  onDelete(expense: Expense){
    if(confirm("Are you sure you want to Delete ?")){
      this.userService.deleteExpense(expense).subscribe((res:any)=>{
        this.expenses = this.expenses.filter((exp)=>exp.id!==expense.id);
      });
    }
  }

}
