import { Injectable } from '@angular/core';
import { Kitten } from './models/kittens';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private API_URL = 'http://localhost:8080/kittens';

  constructor(private http: HttpClient) { }

  findAllUnadoptedCats(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.API_URL + '?isAdopted=false');
  }

  findCatsById(id: number): Observable<Kitten> {
    return this.http.get<Kitten>(this.API_URL + '/' + id);
  }
}
