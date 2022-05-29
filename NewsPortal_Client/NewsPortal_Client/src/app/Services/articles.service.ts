import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { articleCategoryDTO, articleCreationDTO, articleDTO } from '../website-components/articles/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.apiUrl}/articles`;

  getAllArticles(page: number, articlesPerPage: number): Observable<any> {
    let httpParams = new HttpParams();

    httpParams = httpParams.append('page', page.toString());

    httpParams = httpParams.append('articlesPerPage', articlesPerPage.toString());

    return this.http.get<any>(this.apiUrl, { observe: 'response', params: httpParams });
  }

  getArticles(): Observable<articleDTO[]> {
    return this.http.get<articleDTO[]>(`${this.apiUrl}/all`);
  }

  getArticlesCategories(): Observable<articleCategoryDTO[]> {
    return this.http.get<articleCategoryDTO[]>(`${this.apiUrl}/articlesList`);
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

  search(values: any): Observable<any>{
    const httpParams = new HttpParams({ fromObject: values });

    return this.http.get<articleDTO[]>(`${this.apiUrl}/search`, { params: httpParams, observe: 'response'});
  }
}
