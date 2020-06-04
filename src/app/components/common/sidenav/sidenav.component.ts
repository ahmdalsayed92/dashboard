import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  projectsSubMenuActive = false;
  Project360SubMenuActive = false;

  constructor() {}

  ngOnInit(): void {}

  closeProjectSubMenu() {
    this.projectsSubMenuActive = false;
  }
  toggleProjectsSubMenu() {
    this.projectsSubMenuActive = !this.projectsSubMenuActive;
  }
}
