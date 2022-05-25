import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  @Input()
  list: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
