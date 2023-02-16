import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDummyMerchantnumberFilterComponent } from './register-dummy-merchantnumber-filter.component';

describe('RegisterDummyMerchantnumberFilterComponent', () => {
  let component: RegisterDummyMerchantnumberFilterComponent;
  let fixture: ComponentFixture<RegisterDummyMerchantnumberFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDummyMerchantnumberFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDummyMerchantnumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
