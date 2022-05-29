import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'app/Services/category.service';
import { categoryCreationDTO, categoryDTO } from './categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: categoryDTO[];
  displayedColumns = ['Category Name', 'CreatedDateTime', 'Actions'];

  constructor(private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  saveChanges(categoryToCreate: categoryCreationDTO) {
    this.categoriesService.create(categoryToCreate).subscribe(() => {
      this.router.navigate(['/home-page']);
    }, error => console.error(error));
  }

  loadCategories() {
    this.categoriesService.getAllCategories().subscribe((categories: categoryDTO[]) => {
      this.categories = categories;
    });
  }

  deleteArticle(id: number) {
    this.categoriesService
      .delete(id)
      .subscribe(() => {
        this.loadCategories();
      });
  }
}
