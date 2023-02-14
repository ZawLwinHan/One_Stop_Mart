import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserMasterComponent } from './edit-user-master.component';

describe('EditUserMasterComponent', () => {
  let component: EditUserMasterComponent;
  let fixture: ComponentFixture<EditUserMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
