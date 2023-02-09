import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransactionAmountComponent } from './create-transaction-amount.component';

describe('CreateTransactionAmountComponent', () => {
  let component: CreateTransactionAmountComponent;
  let fixture: ComponentFixture<CreateTransactionAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransactionAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
