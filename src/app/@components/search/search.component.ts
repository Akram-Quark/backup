import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../@services/shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private shearedData: SharedDataService) {}
  query: string = '';
  ngOnInit(): void {}

  onChange(): void {
    this.shearedData.send(this.query);
  }
}
