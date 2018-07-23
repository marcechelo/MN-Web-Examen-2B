import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTranferenciaComponent } from './seleccion-tranferencia.component';

describe('SeleccionTranferenciaComponent', () => {
  let component: SeleccionTranferenciaComponent;
  let fixture: ComponentFixture<SeleccionTranferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTranferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTranferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
