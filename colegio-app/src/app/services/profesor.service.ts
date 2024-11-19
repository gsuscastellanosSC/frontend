import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private baseUrl = 'http://localhost:8090/api/profesores';

  constructor(private http: HttpClient) {}

  getAllProfesores(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  getDetalleProfesor(profesorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/detalleProfesor/${profesorId}`);
  }
}
