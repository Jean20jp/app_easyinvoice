import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GtnFacturasPage } from './gtn-facturas.page';

describe('GtnFacturasPage', () => {
  let component: GtnFacturasPage;
  let fixture: ComponentFixture<GtnFacturasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GtnFacturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
