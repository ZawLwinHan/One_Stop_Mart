import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyMasterComponent } from './edit-company-master.component';

describe('EditCompanyMasterComponent', () => {
  let component: EditCompanyMasterComponent;
  let fixture: ComponentFixture<EditCompanyMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompanyMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
