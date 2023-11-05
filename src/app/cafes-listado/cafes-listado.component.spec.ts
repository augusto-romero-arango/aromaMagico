import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CafesListadoComponent } from './cafes-listado.component';
import { Cafe } from './cafe';


describe('CafesListadoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CafesListadoComponent
      ],
    }).compileComponents();
  });

  it('El componente listado de cafes debe estar creado', () => {
    const fixture = TestBed.createComponent(CafesListadoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe crear un cafe', () =>{
    const cafe = new Cafe(1, "Grato Geisha", "Café de origen", "Etiopía");

    expect(cafe.id).toBe(1);
    expect(cafe.nombre).toBe("Grato Geisha");
    expect(cafe.tipo).toBe("Café de origen");
    expect(cafe.region).toBe("Etiopía");
  });

});
