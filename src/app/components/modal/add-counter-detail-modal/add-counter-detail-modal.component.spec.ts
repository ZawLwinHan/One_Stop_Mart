import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounterDetailModalComponent } from './add-counter-detail-modal.component';

describe('AddCounterDetailModalComponent', () => {
  let component: AddCounterDetailModalComponent;
  let fixture: ComponentFixture<AddCounterDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCounterDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCounterDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
