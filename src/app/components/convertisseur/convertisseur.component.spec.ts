import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurComponent } from './convertisseur.component';

describe('ConvertisseurComponent', () => {
  let component: ConvertisseurComponent;
  let fixture: ComponentFixture<ConvertisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
