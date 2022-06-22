import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    {id:1,description:'learn to dance1'},
    {id:2,description:'learn to dance2'},
    {id:3,description:'learn to dance3'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
