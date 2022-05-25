import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + '/categories';

  // getAllArticle(): Observable {
  //   return this.http.get(this.apiUrl);
  // }

  create(category) {
    return this.http.post(this.apiUrl, category);
  } 

}
