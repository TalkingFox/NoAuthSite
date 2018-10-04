import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() username: string;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public social: string;
  public credit: string;
  public passHash: string;
  public pass: string;

  @Output() returned: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const names = this.username.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
    this.phone = this.getRandomNumberString(10);
    this.social = this.getRandomNumberString(9);
    this.credit = '4' + this.getRandomNumberString(15);
    this.pass = this.getPassword();
    this.passHash = btoa(this.pass); // lol
  }

  public getRandomNumberString(numberOfCharacters: number): string {
    let string = '';
    while (string.length < numberOfCharacters) {
      string += Math.floor((Math.random() * 9) + 1).toString();
    }
    return string;
  }

  public getPassword(): string {
    return Math.random().toString(36).substr(2, 8);
  }

  public returnClicked() {
    this.returned.emit();
  }
}
