import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + '/articles';

  getAllArticle(): Observable {
    return this.http.get(this.apiUrl);
  }

}