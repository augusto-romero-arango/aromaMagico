import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesListadoComponent } from './cafes-listado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafesListadoComponent],
  exports:[CafesListadoComponent]
})
export class CafesListadoModule { }
