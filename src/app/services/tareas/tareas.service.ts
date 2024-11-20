import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private API_SERVER = 'http://localhost:8080/tareas';

  constructor(private httpClient: HttpClient) {}

  public getAllTareas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveTarea(tarea: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, tarea);
  }

  public deleteTarea(id: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/delete/' + id);
  }

  // public getTareasByPriority(priorityId: number): Observable<any> {
  //   return this.httpClient.get(`${this.API_SERVER}?prioridadId=${priorityId}`);
  // }

  // public getTareasByResponsable(responsableId: number): Observable<any> {
  //   return this.httpClient.get(
  //     `${this.API_SERVER}?responsableId=${responsableId}`
  //   );
  // }

  // public getTareasByPriorityAndResponsable(
  //   priorityId: number,
  //   responsableId: number
  // ): Observable<any> {
  //   return this.httpClient.get(
  //     `${this.API_SERVER}?responsableId=${responsableId}&prioridadId=${priorityId}`
  //   );
  // }

  public filtrarTareas(
    priorityId?: number | null,
    responsableId?: number | null,
    estadoId?: number | null,
    proyectoId?: number | null,
    fechaCierre?: string | null,
    fechaRegistro?: string | null
  ): Observable<any> {
    // Creamos una variable para guardar los parametros no nulos
    let params: any = {};

    // Si los parametros no son nulos entonces los agrega sino no.
    if (priorityId !== null) {
      params.prioridadId = priorityId;
    }
    if (responsableId !== null) {
      params.responsableId = responsableId;
    }
    if (estadoId !== null) {
      params.estadoId = estadoId;
    }
    if (proyectoId !== null) {
      params.proyectoId = proyectoId;
    }
    if (fechaCierre !== null) {
      params.fechaCierre = fechaCierre;
    }
    if (fechaRegistro !== null) {
      params.fechaRegistro = fechaRegistro;
    }

    // Realiza la solicitud GET con los parámetros
    return this.httpClient.get(`${this.API_SERVER}`, { params });
  }
}
