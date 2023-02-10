import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAuthorizationComponent } from './device-authorization.component';

describe('DeviceAuthorizationComponent', () => {
  let component: DeviceAuthorizationComponent;
  let fixture: ComponentFixture<DeviceAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
