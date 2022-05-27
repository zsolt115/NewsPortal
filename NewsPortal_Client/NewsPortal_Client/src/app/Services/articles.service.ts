import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { articleCreationDTO, articleDTO } from '../website-components/articles/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.apiUrl}/articles`;

  getAllArticle(): Observable<articleDTO[]> {
    return this.http.get<articleDTO[]>(this.apiUrl);
  }

  getArticleById(id: number): Observable<articleDTO> {
    return this.http.get<articleDTO>(`${this.apiUrl}/${id}`)
  }

  create(article: articleCreationDTO) {
    return this.http.post(this.apiUrl, article);
  }

  edit(id: number, article: articleCreationDTO) {
    return this.http.put(`${this.apiUrl}/${id}`, article);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
