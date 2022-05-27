import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'app/Services/category.service';
import { categoryCreationDTO } from '../../categories/categories.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  constructor(private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  saveChanges(categoryToCreate: categoryCreationDTO) {
    this.categoriesService.create(categoryToCreate).subscribe(() => {
      this.router.navigate(['/home-page']);
    }, error => console.error(error));
  }
}
