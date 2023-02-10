import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMasterListingComponent } from './shop-master-listing.component';

describe('ShopMasterListingComponent', () => {
  let component: ShopMasterListingComponent;
  let fixture: ComponentFixture<ShopMasterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMasterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
