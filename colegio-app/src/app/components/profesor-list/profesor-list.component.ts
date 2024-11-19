import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profesor-list',
  standalone: true,
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class ProfesorListComponent implements OnInit {
  [x: string]: any;
  profesores: any[] = []; // Datos completos
  profesoresPaginados: any[] = []; // Profesores para la página actual
  paginaActual: number = 1;
  tamanioPagina: number = 5; // Número de profesores por página

  constructor(
    private profesorService: ProfesorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profesorService.getAllProfesores().subscribe((data) => {
      this.profesores = data; // Cargar datos desde el servicio
      this.actualizarPagina(); // Inicializa la primera página
    });
  }

  // Actualiza los profesores para la página actual
  actualizarPagina(): void {
    const inicio = (this.paginaActual - 1) * this.tamanioPagina;
    const fin = inicio + this.tamanioPagina;
    this.profesoresPaginados = this.profesores.slice(inicio, fin);
  }

  // Cambia la página
  cambiarPagina(nuevaPagina: number): void {
    this.paginaActual = nuevaPagina;
    this.actualizarPagina();
  }

  // Calcula el número máximo de páginas
  get maxPaginas(): number {
    return Math.ceil(this.profesores.length / this.tamanioPagina);
  }

  // Navega al detalle del profesor
  verDetalle(profesorId: number): void {
    this.router.navigate([`/profesor-detalle`, profesorId]);
  }
}