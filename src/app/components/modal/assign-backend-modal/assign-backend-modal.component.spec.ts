import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBackendModalComponent } from './assign-backend-modal.component';

describe('AssignBackendModalComponent', () => {
  let component: AssignBackendModalComponent;
  let fixture: ComponentFixture<AssignBackendModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignBackendModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBackendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
