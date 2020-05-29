import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  isVisible: boolean = false;
  toggleSearch: boolean = false;

  constructor() {}

  openSearch() {
    this.isVisible = true;
    this.toggleSearch = true;
  }
  searchClose() {
    this.isVisible = false;
    this.searchText = '';
    this.toggleSearch = false;
  }
  ngOnInit(): void {
    this.isVisible = false;
  }
}
