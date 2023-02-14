import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDummyMerchantNumberListingComponent } from './register-dummy-merchant-number-listing.component';

describe('RegisterDummyMerchantNumberListingComponent', () => {
  let component: RegisterDummyMerchantNumberListingComponent;
  let fixture: ComponentFixture<RegisterDummyMerchantNumberListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDummyMerchantNumberListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDummyMerchantNumberListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
