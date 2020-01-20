import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCompService {

  constructor(private http: HttpClient) { }

  public GetAllEmployee(): Observable<any> {
    return this.http.get('http://localhost:3000/Api/Employee/GetAllEmployee');
  }
}
