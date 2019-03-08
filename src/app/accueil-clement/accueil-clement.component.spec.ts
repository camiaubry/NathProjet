import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClementComponent } from './accueil-clement.component';

describe('AccueilClementComponent', () => {
  let component: AccueilClementComponent;
  let fixture: ComponentFixture<AccueilClementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilClementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilClementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
