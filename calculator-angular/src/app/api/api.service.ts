import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Result } from '../models/result.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  send(path: string, body: Object): Observable<Result> {
    return this.http.post<Result>(`${environment.api_url}${path}`, JSON.stringify(body), httpOptions)
  }

  get(path: String, value: string): Observable<Result> {
    return this.http.get<Result>(`${environment.api_url}${path}/${value}`, httpOptions);
  }
}
