import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryCreationDTO, categoryDTO } from 'app/website-components/categories/categories.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + '/categories';

  getAllCategories(): Observable<categoryDTO[]> {
    return this.http.get<categoryDTO[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<categoryDTO> {
    return this.http.get<categoryDTO>(`${this.apiUrl}/${id}`)
  }

  create(category: categoryCreationDTO) {
    return this.http.post(this.apiUrl, category);
  }

  edit(id: number, category: categoryCreationDTO) {
    return this.http.put(`${this.apiUrl}/${id}`, category);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
