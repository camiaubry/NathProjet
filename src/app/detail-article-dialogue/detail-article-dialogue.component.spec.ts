import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleDialogueComponent } from './detail-article-dialogue.component';

describe('DetailArticleDialogueComponent', () => {
  let component: DetailArticleDialogueComponent;
  let fixture: ComponentFixture<DetailArticleDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailArticleDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
