import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMasterFilterComponent } from './role-master-filter.component';

describe('RoleMasterFilterComponent', () => {
  let component: RoleMasterFilterComponent;
  let fixture: ComponentFixture<RoleMasterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleMasterFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMasterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
