import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserFilterComponent } from './register-user-filter.component';

describe('RegisterUserFilterComponent', () => {
  let component: RegisterUserFilterComponent;
  let fixture: ComponentFixture<RegisterUserFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
