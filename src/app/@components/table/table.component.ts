import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../@services/shared-data.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit {
  constructor(private sharedData: SharedDataService) {}

  ngOnInit(): void {
    this.sharedData.recieve().subscribe((data: string) => {
      console.log(data);
    });
  }
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['fname', 'lname', 'age', 'position'];
  expandedElement: Agent | null | undefined;
}
export interface Agent {
  fname: string;
  lname: string;
  position: number;
  age: number;

  description: string;
}

const ELEMENT_DATA: Agent[] = [
  {
    position: 1,
    fname: 'romio',
    lname: 'alcatel',
    age: 23,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        `,
  },
  {
    position: 2,
    fname: 'mario',
    lname: 'balo',
    age: 25,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
       `,
  },
  {
    position: 4,
    fname: 'sam',
    lname: 'holben',
    age: 23,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        `,
  },
  {
    position: 5,
    fname: 'david',
    lname: 'craowel',
    age: 26,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
       `,
  },
];
function data(data: any, arg1: (string: any) => void) {
  throw new Error('Function not implemented.');
}
