import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProductsPage } from './form-products.page';

describe('FormProductsPage', () => {
  let component: FormProductsPage;
  let fixture: ComponentFixture<FormProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
