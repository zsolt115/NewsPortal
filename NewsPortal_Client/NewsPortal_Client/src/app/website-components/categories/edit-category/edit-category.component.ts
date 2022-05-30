import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'app/Services/category.service';
import { categoryCreationDTO, categoryDTO } from '../categories.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoriesService, private router: Router) { }

  model: categoryDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: { [x: string]: number; }) => {
      this.categoryService.getCategoryById(params['id']).subscribe((category: categoryDTO) => {
        this.model = category;
      });
    });
  }

  saveChanges(categoryCreationDTO: categoryCreationDTO) {
    this.categoryService
      .edit(this.model.id, categoryCreationDTO)
      .subscribe(() => {
        (<any>this.router).navigate(["/categories"]);
      });
  }
}
