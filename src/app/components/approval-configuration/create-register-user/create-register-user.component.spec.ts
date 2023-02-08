import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterUserComponent } from './create-register-user.component';

describe('CreateRegisterUserComponent', () => {
  let component: CreateRegisterUserComponent;
  let fixture: ComponentFixture<CreateRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegisterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
