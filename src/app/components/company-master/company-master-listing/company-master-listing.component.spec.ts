import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMasterListingComponent } from './company-master-listing.component';

describe('CompanyMasterListingComponent', () => {
  let component: CompanyMasterListingComponent;
  let fixture: ComponentFixture<CompanyMasterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMasterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
