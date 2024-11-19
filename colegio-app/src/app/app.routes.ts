import { Routes } from '@angular/router';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';
import { ProfesorDetalleComponent } from './components/profesor-detalle/profesor-detalle.component';

export const routes: Routes = [
  { path: '', component: ProfesorListComponent },
  { path: 'profesor-detalle/:profesorId', component: ProfesorDetalleComponent },
];