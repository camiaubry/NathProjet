import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerCommandeDialogueComponent } from './annuler-commande-dialogue.component';

describe('AnnulerCommandeDialogueComponent', () => {
  let component: AnnulerCommandeDialogueComponent;
  let fixture: ComponentFixture<AnnulerCommandeDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulerCommandeDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerCommandeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
