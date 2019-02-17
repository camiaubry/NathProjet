import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeArticleDialogueComponent } from './admin-liste-article-dialogue.component';

describe('AdminListeArticleDialogueComponent', () => {
  let component: AdminListeArticleDialogueComponent;
  let fixture: ComponentFixture<AdminListeArticleDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeArticleDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeArticleDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
