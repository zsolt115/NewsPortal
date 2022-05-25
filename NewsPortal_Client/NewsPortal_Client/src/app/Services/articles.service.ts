import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  getArticleById(id: number): Observable<articleDTO[]> {
    return this.http.get<articleDTO[]>(`${this.apiUrl}/${id}`)
  }

  create(article: articleCreationDTO) {
    return this.http.post(this.apiUrl, article);
  }

  edit(id: number, article: articleCreationDTO) {
    return this.http.put(`${this.apiUrl}/${id}`, article);
  }
}
