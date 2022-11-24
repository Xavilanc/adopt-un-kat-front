import { Injectable } from '@angular/core';
import { Kitten } from './models/kittens';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Kittens } from './kitten-form-create/kitten-form-create.component';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private API_URL = 'http://localhost:8080/kittens';

  constructor(private http: HttpClient) { }

  findAllUnadoptedCats(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.API_URL + '?isAdopted=false');
  }

  findAllAdoptedCats(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.API_URL + '?isAdopted=true');
  }

  findCatsById(id: number): Observable<Kitten> {
    return this.http.get<Kitten>(this.API_URL + '/' + id);
  }

  updateCat(id: number, kitten: Kitten): Observable<Kitten> {
    return this.http.put<Kitten>(this.API_URL + '/' + id, kitten);
  }

  createCat(kitten: Kitten): Observable<Kitten> {
    return this.http.post<Kitten>(this.API_URL, kitten);
  }

  adoptCat(id: number): Observable<Kitten> {
    return this.http.post<Kitten>(this.API_URL + '/' + id + '/adopt', id);
  }

  deleteCat(id: number): Observable<Kitten> {
    return this.http.delete<Kitten>(this.API_URL + '/' + id);
  }
}
