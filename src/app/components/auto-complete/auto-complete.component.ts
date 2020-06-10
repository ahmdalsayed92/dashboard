import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.scss"],
})
export class AutoCompleteComponent implements OnInit {
  @Input() dataList;
  @Input() valid;
  @Output() inputCleared = new EventEmitter<boolean>();
  @Output() selectedValue = new EventEmitter<string>();
  keyword = "name";

  constructor() {}

  ngOnInit(): void {}

  selectEvent(item) {
    this.selectedValue.emit(item.name);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
  onCleared(e) {
    this.inputCleared.emit(true);
  }
}
