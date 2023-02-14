import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMasterListingComponent } from './role-master-listing.component';

describe('RoleMasterListingComponent', () => {
  let component: RoleMasterListingComponent;
  let fixture: ComponentFixture<RoleMasterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleMasterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
