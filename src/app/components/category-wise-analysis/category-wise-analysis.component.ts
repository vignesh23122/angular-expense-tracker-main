import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart,ChartConfiguration, ChartData, ChartEvent, ChartType, UpdateModeEnum } from 'chart.js';
import { BaseChartDirective,NgChartsModule } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { AppConstants } from 'src/app/util/AppConstants';
import { Expense } from 'src/app/models/expense.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-category-wise-analysis',
  templateUrl: './category-wise-analysis.component.html',
  styleUrls: ['./category-wise-analysis.component.css']
})
export class CategoryWiseAnalysisComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  expenses:Expense[] =[];

  showChart:boolean = false;

  data:number[] = new Array(AppConstants.EXPENSE_CATEGORIES.length).fill(0);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.protectedRouting();
    this.userService.fetchAllExpenses().subscribe((exps:Expense[])=>{
      this.expenses=exps;
      this.generateData(this.expenses);
    });
  }

  generateData(expenses:Expense[]){
    this.showChart = false;
    let categories = AppConstants.EXPENSE_CATEGORIES;
    let data = new Array(categories.length).fill(0);
    expenses.forEach((expense)=>{
      let i =categories.indexOf(expense.category);
      data[i]+=1;
    });
    this.data = data;
    this.showChart = true;
    this.barChartData.datasets[0].data = data;
    this.chart?.update();
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels:AppConstants.EXPENSE_CATEGORIES,
    datasets: [
      { data: this.data, label: 'Expenses' },
    ]
  };


 
}
