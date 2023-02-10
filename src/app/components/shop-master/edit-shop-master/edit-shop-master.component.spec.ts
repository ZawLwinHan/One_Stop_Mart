import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopMasterComponent } from './edit-shop-master.component';

describe('EditShopMasterComponent', () => {
  let component: EditShopMasterComponent;
  let fixture: ComponentFixture<EditShopMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShopMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
