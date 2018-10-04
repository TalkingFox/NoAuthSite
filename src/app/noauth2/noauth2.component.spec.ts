import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noauth2Component } from './noauth2.component';

describe('Noauth2Component', () => {
  let component: Noauth2Component;
  let fixture: ComponentFixture<Noauth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noauth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noauth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
