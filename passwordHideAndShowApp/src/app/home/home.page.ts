import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor() {}

  togglePassword():void {
   this.showPassword = !this.showPassword;
   if(this.passwordToggleIcon == 'eye'){
         this.passwordToggleIcon = 'eye-off';
   }else{
         this.passwordToggleIcon = 'eye';
   }
  }

}
