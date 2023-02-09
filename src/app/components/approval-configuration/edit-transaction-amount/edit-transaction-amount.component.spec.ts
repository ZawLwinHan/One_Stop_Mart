import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionAmountComponent } from './edit-transaction-amount.component';

describe('EditTransactionAmountComponent', () => {
  let component: EditTransactionAmountComponent;
  let fixture: ComponentFixture<EditTransactionAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransactionAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransactionAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
