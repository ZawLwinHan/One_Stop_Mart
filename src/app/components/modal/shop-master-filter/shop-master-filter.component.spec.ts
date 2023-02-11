import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMasterFilterComponent } from './shop-master-filter.component';

describe('ShopMasterFilterComponent', () => {
  let component: ShopMasterFilterComponent;
  let fixture: ComponentFixture<ShopMasterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMasterFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMasterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
