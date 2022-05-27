import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryCreationDTO } from '../categories.model';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: categoryCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<categoryCreationDTO> = new EventEmitter<categoryCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      createdDateTime: new Date
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
