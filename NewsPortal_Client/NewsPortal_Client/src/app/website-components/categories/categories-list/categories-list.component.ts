import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  categories=[];
  
  form: FormGroup;
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      description: ''
    })
  }

  saveChanges() {
    this.router.navigate(['/categories']);
  }

  deleteCategory() {

  }
}
