import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvellementmpComponent } from './renouvellementmp.component';

describe('RenouvellementmpComponent', () => {
  let component: RenouvellementmpComponent;
  let fixture: ComponentFixture<RenouvellementmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenouvellementmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenouvellementmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
