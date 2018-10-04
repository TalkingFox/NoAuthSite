import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noauth2',
  templateUrl: './noauth2.component.html',
  styleUrls: ['./noauth2.component.css']
})
export class Noauth2Component implements OnInit {

  constructor() { }

  public isLoggedIn = false;
  public username = '';

  ngOnInit() {
  }

  public loggedIn(username) {
    this.isLoggedIn = true;
    this.username = username;
  }

  public returned() {
    this.isLoggedIn = false;
  }

}
