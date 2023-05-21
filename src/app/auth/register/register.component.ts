import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { HelperService } from 'src/app/services/helper/helper.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: any = {};
  is_otpgenrated: boolean = false;
  constructor(public helperService: HelperService, public apiService: ApiService, private router: Router){
    this.helperService.showhideheadsidefoot = false;

  }
  ngOnInit(){
  }

  formSubmit($event: any){
    let endpoint = 'AUTH_REGISTER';
    if(this.is_otpgenrated){
      endpoint = 'VERIFY_OTP';
    }
    this.apiService.request(endpoint, this.model).subscribe(
      (response) => {
        // Handle the response data
        if(endpoint == 'AUTH_REGISTER'){
          this.is_otpgenrated = true;
        }else{
          this.helperService.showhideheadsidefoot = true;
          this.router.navigate(['dashboard']);
        }
        console.log(response);
      },
      (error) => {
        // Handle the error
        console.log(error);
      }
    );
  }

}
