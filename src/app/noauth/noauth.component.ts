import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noauth',
  templateUrl: './noauth.component.html',
  styleUrls: ['./noauth.component.css']
})
export class NoauthComponent implements OnInit {

  constructor() { }

  public isLoggedIn = false;
  public username = '';

  ngOnInit() {
  }

  public loggedIn(username) {
    console.log(username);
    this.isLoggedIn = true;
    this.username = username;
  }

  public returned() {
    this.isLoggedIn = false;
  }

}
