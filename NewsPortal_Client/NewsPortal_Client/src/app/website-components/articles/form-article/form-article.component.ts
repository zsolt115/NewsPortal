import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { articleCreationDTO } from '../articles.model';
import { CategoriesService } from 'app/Services/category.service';
import { categoryDTO } from 'app/website-components/categories/categories.model';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) { }

  @Input()
  model: articleCreationDTO;

  categoriesList: categoryDTO[];
  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<articleCreationDTO> = new EventEmitter<articleCreationDTO>();

  ngOnInit(): void {
    this.loadCategories();

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: null,
      createdDateTime: new Date
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  loadCategories() {
    this.categoriesService.getAllCategories().subscribe((categories: categoryDTO[]) => {
      this.categoriesList = categories;
    });
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
