import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMasterListingComponent } from './user-master-listing.component';

describe('UserMasterListingComponent', () => {
  let component: UserMasterListingComponent;
  let fixture: ComponentFixture<UserMasterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMasterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
