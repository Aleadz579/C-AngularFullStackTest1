import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaKarte } from './firma-karte';

describe('FirmaKarte', () => {
  let component: FirmaKarte;
  let fixture: ComponentFixture<FirmaKarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmaKarte],
    }).compileComponents();

    fixture = TestBed.createComponent(FirmaKarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
