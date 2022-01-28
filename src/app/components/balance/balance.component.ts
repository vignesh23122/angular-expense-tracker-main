import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balanceAmount: number = 0;
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.protectedRouting();
    this.userService.fetchBalance().subscribe((res:any)=>this.balanceAmount=res.amount);
  }

}
