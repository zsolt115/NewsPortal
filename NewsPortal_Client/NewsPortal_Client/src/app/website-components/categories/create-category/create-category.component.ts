import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryCreationDTO } from '../../categories/categories.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  model: categoryCreationDTO;

  constructor(private router: Router, private formBuilder: FormBuilder) { 

  }

  @Output()
  onSaveChanges: EventEmitter<categoryCreationDTO> = new EventEmitter<categoryCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    console.log(this.form);
    this.onSaveChanges.emit(this.form.value);
  }

}
