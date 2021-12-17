import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAPIComponent } from './devis-api.component';

describe('DevisAPIComponent', () => {
  let component: DevisAPIComponent;
  let fixture: ComponentFixture<DevisAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
