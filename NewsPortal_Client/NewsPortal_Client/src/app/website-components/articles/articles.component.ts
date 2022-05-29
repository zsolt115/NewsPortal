import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'app/Services/articles.service';
import { articleCategoryDTO, articleCreationDTO, articleDTO } from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  displayedColumns = ['Title', 'Description', 'Category Name', 'CreatedDateTime', 'Actions'];
  articles: articleCategoryDTO[];
  
  constructor(private router: Router, private articlesService: ArticlesService) { }
  
  ngOnInit(): void {
    this.loadArticles();
  }

  saveChanges(articleToCreate: articleCreationDTO) {
    this.articlesService.create(articleToCreate).subscribe(() => {
      this.router.navigate(['/home-page']);
    }, error => console.error(error));
  }

  deleteArticle(id: number) {
    this.articlesService
      .delete(id)
      .subscribe(() => {
        this.loadArticles();
      });
  }

  loadArticles() {
    // this.articlesService.getArticles().subscribe((articles: articleDTO[]) => {
    //   this.articles = articles;
    // });
    this.articlesService.getArticlesCategories().subscribe((articles: articleCategoryDTO[]) => {
      this.articles = articles;
    });
  }
}
