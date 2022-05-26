import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { articleCreationDTO } from '../articles.model';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  @Input()
  model: articleCreationDTO;

  categoriesList = [{id: 1, name: 'Sports'}, {id: 2, name: 'Games'}];
  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<articleCreationDTO> = new EventEmitter<articleCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      createdDateTime: new Date
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);

    console.log(this.form);
  }
  
  deleteCategory() {

  }
}
