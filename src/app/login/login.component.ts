import {Component, OnInit} from '@angular/core';
import {and} from '@angular/router/src/utils/collection';
import {passBoolean} from 'protractor/built/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  chk_username: string = '';
  chk_password = 3;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  userNameCheck(event: Event) {
    if ((<HTMLInputElement> event.target).value.trim() != 'mostafa') {
      this.chk_username = 'not find this username';
    } else {
      this.chk_username = ' you are my man';
    }
  }


  doLogin() {
    if (this.username.trim() == 'mostafa' && this.password == '12354') {
      alert('welcome brother, god with us');
    } else {
      this.chk_username = "somthing wrong";
      this.chk_password = this.chk_password -1;
      if(this.chk_password == 0) {
        this.disabled = true;
      }
    }
  }

}
