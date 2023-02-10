import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAmountListComponent } from './transaction-amount-list.component';

describe('TransactionAmountListComponent', () => {
  let component: TransactionAmountListComponent;
  let fixture: ComponentFixture<TransactionAmountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAmountListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionAmountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
