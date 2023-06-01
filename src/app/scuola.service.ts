import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScuolaService {

  constructor(private http: HttpClient) { }


  listaDati

  url = "http://localhost:3000/users"

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  addStudente(studente: any): Observable<any> {
    return this.http.post<any>(this.url, studente);
  }

  deleteStudente(id: number): Observable<any> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete<any>(deleteUrl);

  }

}


