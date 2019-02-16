import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeDialogueComponent } from './admin-liste-dialogue.component';

describe('AdminListeDialogueComponent', () => {
  let component: AdminListeDialogueComponent;
  let fixture: ComponentFixture<AdminListeDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
