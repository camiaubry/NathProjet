import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidetailleDialogueComponent } from './guidetaille-dialogue.component';

describe('GuidetailleDialogueComponent', () => {
  let component: GuidetailleDialogueComponent;
  let fixture: ComponentFixture<GuidetailleDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidetailleDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidetailleDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
