import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegisterDummyMerchantNumberComponent } from './edit-register-dummy-merchant-number.component';

describe('EditRegisterDummyMerchantNumberComponent', () => {
  let component: EditRegisterDummyMerchantNumberComponent;
  let fixture: ComponentFixture<EditRegisterDummyMerchantNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegisterDummyMerchantNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegisterDummyMerchantNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
