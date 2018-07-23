import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosComponent } from './modal-datos.component';

describe('ModalDatosComponent', () => {
  let component: ModalDatosComponent;
  let fixture: ComponentFixture<ModalDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
