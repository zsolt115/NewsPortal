import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';
import { articleDTO } from '../articles/articles.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  articles: articleDTO[];
  displayedColumns = ['Title', 'Description', 'Category Name', 'CreatedDateTime', 'Actions'];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getAllArticle().subscribe((articles: articleDTO[]) => {
      this.articles = articles;
    })
  }

  deleteArticle() {

  }
}
