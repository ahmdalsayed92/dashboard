import { Component, OnInit, Input, Output, ElementRef } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-select",
  templateUrl: "./form-select.component.html",
  styleUrls: ["./form-select.component.scss"],
  host: {
    "(document:click)": "onClickOnOtherDropDowns($event)",
  },
})
export class FormSelectComponent implements OnInit {
  @Input() label: string;
  @Input() optionsList: [];
  @Input() title: string;
  @Input() formControlName: string;
  @Input() placeholderText: string;
  @Input() required: boolean;
  @Input() valid: boolean;
  @Output() selectedValue = new EventEmitter<string>();

  openSelect = false;
  closeOther = true;
  selected = "select value";
  constructor(private _eref: ElementRef) {}

  openSelectSector() {
    this.openSelect = !this.openSelect;
  }
  selectSector(value) {
    this.openSelect = false;
    this.selected = value;
    this.selectedValue.emit(this.selected);
  }

  ngOnInit(): void {}

  onClickOnOtherDropDowns(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.openSelect = false;
    }
  }
}
