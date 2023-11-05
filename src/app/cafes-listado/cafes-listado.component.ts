import { Component, OnInit } from '@angular/core';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cafes-listado',
  templateUrl: './cafes-listado.component.html',
  styleUrls: ['./cafes-listado.component.css'],
})
export class CafesListadoComponent implements OnInit {
  cafes: Array<Cafe> = [];
  totales: Map<string, number>= new Map();

  constructor(private cafeServicio: CafeService) {}

  ngOnInit() {
    this.obtenerCafes().subscribe((cafes) => {
      this.cafes = cafes
      this.totales =  this.totalizarCafes(cafes);
    });

  }

  obtenerCafes(): Observable<Cafe[]> {
    return this.cafeServicio.obtenerCafes().pipe(
      map((dato) => {
        return dato.map(
          (cafe) => new Cafe(cafe.id, cafe.nombre, cafe.tipo, cafe.region)
        );
      })
    );
  }

  totalizarCafes(cafesObtenidos: Array<Cafe>): Map<string, number> {
    return cafesObtenidos.reduce((mapa, cafe) => {
      const tipo = cafe.tipo;
      mapa.set(tipo, (mapa.get(tipo) || 0) + 1);
      return mapa;
    }, new Map<string, number>());
  }
}
