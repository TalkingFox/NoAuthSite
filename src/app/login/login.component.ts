import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  @Output() loggedIn = new EventEmitter<string>();
  @Input() hasLyingSupport = false;

  public users: string[] = [
    'Faustino Boney',
    'Tori Meriwether',
    'Trena Hudock',
    'Elisabeth Carbaugh',
    'Lauralee Okada',
    'Boyce Muszynski',
    'Joette Custis',
    'Loura Carini',
    'Carmine Shi',
    'Margarite Seeber',
    'Kory Lippold',
    'Helena Gustin',
    'Kenia Osterhoudt',
    'Vivien Clinkscales',
    'Jovita Daw',
    'Barry Ruud',
    'Dick Theurer',
    'Twanna Nixon',
    'Nicholas Garlick',
    'Collen Duffin'
  ];

  public selectedUser = '';

  ngOnInit() {}

  public login(selectedUser): void {
    this.loggedIn.emit(selectedUser);
  }
}
