import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginOtpComponent } from './user-login-otp.component';

describe('UserLoginOtpComponent', () => {
  let component: UserLoginOtpComponent;
  let fixture: ComponentFixture<UserLoginOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
