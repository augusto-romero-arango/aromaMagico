import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CafesListadoComponent } from './cafes-listado.component';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';
import { of } from 'rxjs';


describe('CafesListadoComponent', () => {
  let component: CafesListadoComponent;
  let fixture: ComponentFixture<CafesListadoComponent>
  let cafeServiceMock;

  beforeEach(async () => {
    cafeServiceMock = jasmine.createSpyObj(['obtenerCafes']);
    cafeServiceMock.obtenerCafes.and.returnValue(of(cafesObtenidos));
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CafesListadoComponent
      ],
      providers: [{provide: CafeService, useValue: cafeServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(CafesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente listado de cafes debe estar creado', () => {
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

  it('listado de cafes debe tener todos los elementos que retorna el servicio', ()=>{
    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    const celdasPrimeraFila = filas[0].querySelectorAll('td');

    expect(filas.length).toBe(3);
    expect(filas[0].querySelectorAll('th')[0].textContent).toBe('1');
    expect(celdasPrimeraFila[0].textContent).toBe('Café Especial para tí');
    expect(celdasPrimeraFila[1].textContent).toBe('Blend');
    expect(celdasPrimeraFila[2].textContent).toBe('Angelópolis, Antioquia');
  });

  it('debe totalizar los cafés por el tipo de café', ()=>{
    const totales = fixture.nativeElement.querySelectorAll('#detallePorTipo');

    expect(totales.length).toBe(2);
    expect(totales[0].textContent).toContain('Total Blend: 2');
    expect(totales[1].textContent).toContain('Total Café de Origen: 1');

  });



  let cafesObtenidos =  [
      {
          "id": 1,
          "nombre": "Café Especial para tí",
          "tipo": "Blend",
          "region": "Angelópolis, Antioquia",
          "sabor": "Panela, Durazno, Caramelo",
          "altura": 1920,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg"
      },
      {
          "id": 2,
          "nombre": "Café Especial Navegante",
          "tipo": "Café de Origen",
          "region": "Guatapé, Antioquia",
          "sabor": "Cítrico, Naranja, Cacao",
          "altura": 1800,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
      },
      {
          "id": 3,
          "nombre": "Café Especial El Prístino",
          "tipo": "Blend",
          "region": "Chinchiná, Caldas",
          "sabor": "Chocolate negro, Caramelo",
          "altura": 1700,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png"
      }
  ]

});
