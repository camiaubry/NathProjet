import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCamilleComponent } from './accueil-camille.component';

describe('AccueilCamilleComponent', () => {
  let component: AccueilCamilleComponent;
  let fixture: ComponentFixture<AccueilCamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilCamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
