import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCircleComponent } from './otp-circle.component';

describe('OtpCircleComponent', () => {
  let component: OtpCircleComponent;
  let fixture: ComponentFixture<OtpCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
