import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegisterUserComponent } from './edit-register-user.component';

describe('EditRegisterUserComponent', () => {
  let component: EditRegisterUserComponent;
  let fixture: ComponentFixture<EditRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegisterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
