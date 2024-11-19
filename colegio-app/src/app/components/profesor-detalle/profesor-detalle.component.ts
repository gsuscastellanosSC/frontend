import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesor-detalle',
  standalone: true,
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.css'],
  imports: [CommonModule],
})
export class ProfesorDetalleComponent implements OnInit {
  detalles: any[] = [];
  profesorId!: number;

  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    this.profesorId = Number(this.route.snapshot.paramMap.get('profesorId'));
    this.profesorService.getDetalleProfesor(this.profesorId).subscribe((data) => {
      this.detalles = data;
    });
  }
}
