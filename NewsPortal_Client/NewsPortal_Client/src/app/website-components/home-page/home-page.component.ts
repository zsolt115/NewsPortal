import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ArticlesService } from 'app/Services/articles.service';
import { CategoriesService } from 'app/Services/category.service';
import { articleDTO } from '../articles/articles.model';
import { categoryDTO } from '../categories/categories.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  articles: any;
  categories: categoryDTO[];
  totalAmountOfArticles: string;
  currentPage: number = 1;
  pageSize = 5;

  searchForm: FormGroup;
  defaultFormValues: any;

  displayedColumns = ['Title', 'Description', 'Category Name', 'CreatedDateTime', 'Actions'];

  constructor(private articlesService: ArticlesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ''
    });

    this.defaultFormValues = this.searchForm.value;

    this.loadArticles();
  }

  loadArticles() {
    this.articlesService.getAllArticles(this.currentPage, this.pageSize).subscribe((response: HttpResponse<articleDTO[]>) => {
      this.articles = response.body;

      this.searchArticles(this.searchForm.value);

      this.searchForm.valueChanges.subscribe((values => {
        this.searchArticles(values);
      }));

      this.totalAmountOfArticles = response.headers.get("totalAmountOfArticles");
    });
  }

  searchArticles(values: any) {
    values.page = this.currentPage;
    values.articlesPerPage = 5;

    this.articlesService.search(values).subscribe((response: HttpResponse<articleDTO[]>) => {
      this.articles = response.body;
    })
  }

  clearForm() {
    this.searchForm.patchValue(this.defaultFormValues);
  }

  paginateEvent(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;

    this.pageSize = event.pageSize;

    this.loadArticles();
  }
  // loadArticles() {
  //   this.articlesService.getAllArticle().subscribe((articles: articleDTO[]) => {
  //     this.articles = articles;
  //   });
  // }

  deleteArticle(id: number) {
    this.articlesService
      .delete(id)
      .subscribe(() => {
        this.loadArticles();
      });
  }
}
