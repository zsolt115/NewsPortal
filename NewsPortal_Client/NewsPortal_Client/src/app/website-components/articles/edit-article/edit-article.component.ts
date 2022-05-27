import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'app/Services/articles.service';
import { articleCreationDTO, articleDTO } from '../articles.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticlesService, private router: Router) { }

  model: articleDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: { [x: string]: number; }) => {
      this.articleService.getArticleById(params['id']).subscribe((article: articleDTO) => {
        this.model = article;
      });
    });
  }

  saveChanges(articleCreationDTO: articleCreationDTO) {
    this.articleService
      .edit(this.model.id, articleCreationDTO)
      .subscribe(() => {
        (<any>this.router).navigate(["/home-page"]);
      });
  }
}
