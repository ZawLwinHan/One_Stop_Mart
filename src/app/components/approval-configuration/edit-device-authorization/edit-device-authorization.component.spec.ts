import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceAuthorizationComponent } from './edit-device-authorization.component';

describe('EditDeviceAuthorizationComponent', () => {
  let component: EditDeviceAuthorizationComponent;
  let fixture: ComponentFixture<EditDeviceAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
