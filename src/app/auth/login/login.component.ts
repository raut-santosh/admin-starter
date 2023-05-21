import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private helperService:HelperService){
    
  }
  ngOnInit(){
    this.helperService.showhideheadsidefoot = false; 
  }

}
