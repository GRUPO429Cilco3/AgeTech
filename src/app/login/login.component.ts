import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new FormControl('');
  //pass = new FormControl;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public show():void{
    if (this.user.value=="AgeTech"){
      alert("Login exitoso!");
      this._router.navigate(['/Home'])

    }
    
  }
}
