import { Component } from '@angular/core';
import { HelperService } from './services/helper/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-starter';
  constructor(public helperService: HelperService){
    
  }
  ngOnInit(){
    
  }
}
