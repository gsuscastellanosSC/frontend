import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profesor-detalle',
  standalone: true,
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.css'],
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})

export class ProfesorDetalleComponent implements OnInit {
  datos: any[] = [];
  datosPaginados: any[] = [];
  paginaActual: number = 1;
  tamanioPagina: number = 5; 

  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const profesorId = Number(this.route.snapshot.paramMap.get('profesorId'));
    this.profesorService.getDetalleProfesor(profesorId).subscribe((data) => {
      this.datos = data;
      this.actualizarPagina();
    });
  }

  // Regresa al listado de profesores
  regresarAlListado(): void {
    this.router.navigate(['/']); // Navega a la página raíz
  }

  // Calcula los datos para la página actual
  actualizarPagina(): void {
    const inicio = (this.paginaActual - 1) * this.tamanioPagina;
    const fin = inicio + this.tamanioPagina;
    this.datosPaginados = this.datos.slice(inicio, fin);
  }

  // Cambia la página
  cambiarPagina(nuevaPagina: number): void {
    this.paginaActual = nuevaPagina;
    this.actualizarPagina();
  }

  // Calcula el número máximo de páginas
  get maxPaginas(): number {
    return Math.ceil(this.datos.length / this.tamanioPagina);
  }
}