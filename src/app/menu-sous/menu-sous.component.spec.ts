import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSousComponent } from './menu-sous.component';

describe('MenuSousComponent', () => {
  let component: MenuSousComponent;
  let fixture: ComponentFixture<MenuSousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
