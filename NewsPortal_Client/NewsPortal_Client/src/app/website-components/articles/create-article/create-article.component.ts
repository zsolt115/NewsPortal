import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { articleCreationDTO } from '../articles.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(private router: Router, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    
  }

  saveChanges(articleToCreate: articleCreationDTO) {
    this.articlesService.create(articleToCreate).subscribe(() => {
      this.router.navigate(['/home-page']);
    }, error => console.error(error));
  }
}
