import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeArticleComponent } from './admin-liste-article.component';

describe('AdminListeArticleComponent', () => {
  let component: AdminListeArticleComponent;
  let fixture: ComponentFixture<AdminListeArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
