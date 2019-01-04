import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpoublierComponent } from './mpoublier.component';

describe('MpoublierComponent', () => {
  let component: MpoublierComponent;
  let fixture: ComponentFixture<MpoublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpoublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpoublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
