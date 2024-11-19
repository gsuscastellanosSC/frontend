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
  profesores: any[] = [];

  constructor(
    private profesorService: ProfesorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profesorService.getAllProfesores().subscribe((data) => {
      this.profesores = data;
    });
  }

  verDetalle(profesorId: number): void {
    this.router.navigate(['/profesor-detalle', profesorId]);
  }
}
