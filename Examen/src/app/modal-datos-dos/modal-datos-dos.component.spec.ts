import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosDosComponent } from './modal-datos-dos.component';

describe('ModalDatosDosComponent', () => {
  let component: ModalDatosDosComponent;
  let fixture: ComponentFixture<ModalDatosDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatosDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
