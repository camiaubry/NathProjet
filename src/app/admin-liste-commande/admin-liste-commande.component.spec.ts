import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeCommandeComponent } from './admin-liste-commande.component';

describe('AdminListeCommandeComponent', () => {
  let component: AdminListeCommandeComponent;
  let fixture: ComponentFixture<AdminListeCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
