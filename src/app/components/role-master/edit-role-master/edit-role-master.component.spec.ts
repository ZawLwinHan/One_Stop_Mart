import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleMasterComponent } from './edit-role-master.component';

describe('EditRoleMasterComponent', () => {
  let component: EditRoleMasterComponent;
  let fixture: ComponentFixture<EditRoleMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRoleMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
