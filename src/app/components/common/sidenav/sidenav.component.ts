import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  projectsSubMenuActive = false;
  Project360SubMenuActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProjectsSubMenu() {
    this.Project360SubMenuActive = false;
    this.projectsSubMenuActive = !this.projectsSubMenuActive;
  }

  toggleProject360SubMenu() {
    this.projectsSubMenuActive = false;
    this.Project360SubMenuActive = !this.Project360SubMenuActive;
  }

}
