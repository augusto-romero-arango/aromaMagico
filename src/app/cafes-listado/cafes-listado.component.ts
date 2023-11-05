import { Component, OnInit } from '@angular/core';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cafes-listado',
  templateUrl: './cafes-listado.component.html',
  styleUrls: ['./cafes-listado.component.css']
})
export class CafesListadoComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor(private cafeServicio: CafeService) { }

  ngOnInit() {
    this.obtenerCafes().subscribe((cafes) => this.cafes = cafes);
  }

  obtenerCafes(): Observable<Cafe[]>{
    return this.cafeServicio.obtenerCafes().pipe(
      map(dato => {
        return dato.map(cafe => new Cafe(cafe.id, cafe.nombre, cafe.tipo, cafe.region))
      })
    )
  }


}
