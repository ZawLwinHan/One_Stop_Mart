import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterDummyMerchantNumberComponent } from './create-register-dummy-merchant-number.component';

describe('CreateRegisterDummyMerchantNumberComponent', () => {
  let component: CreateRegisterDummyMerchantNumberComponent;
  let fixture: ComponentFixture<CreateRegisterDummyMerchantNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegisterDummyMerchantNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegisterDummyMerchantNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
