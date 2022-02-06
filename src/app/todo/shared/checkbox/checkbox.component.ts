import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {


  tb_list_task = [
    {
      id_task: '1',
      nm_task: 'This is my first task',
    },
    {
      id_task: '2',
      nm_task: 'This is my second task'
    },
    {
      id_task: '3',
      nm_task: 'This is my third task'
    },

    {
      id_task: '4',
      nm_task: 'Mateus'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
