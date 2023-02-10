import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopMasterComponent } from './create-shop-master.component';

describe('CreateShopMasterComponent', () => {
  let component: CreateShopMasterComponent;
  let fixture: ComponentFixture<CreateShopMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShopMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
