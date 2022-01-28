import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent implements OnInit {

  balanceAmount: number = 0;

  isUpdated: boolean = false;

  addBalanceForm:FormGroup = new FormGroup({
    amount: new FormControl('',[Validators.required,Validators.min(1)])
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.protectedRouting();
  }

  onSubmit(){
    this.isUpdated=false;
    if(this.addBalanceForm.valid){
      this.userService.updateBalance(this.addBalanceForm.value.amount).subscribe((res:any)=>{this.balanceAmount=res.amount;this.isUpdated=true;});
    }
  }


  get amount(){return this.addBalanceForm.get('amount');}

}
