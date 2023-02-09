import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeviceAuthorizationComponent } from './create-device-authorization.component';

describe('CreateDeviceAuthorizationComponent', () => {
  let component: CreateDeviceAuthorizationComponent;
  let fixture: ComponentFixture<CreateDeviceAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDeviceAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeviceAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
