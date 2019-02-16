import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCommandeComponent } from './suivi-commande.component';

describe('SuiviCommandeComponent', () => {
  let component: SuiviCommandeComponent;
  let fixture: ComponentFixture<SuiviCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
