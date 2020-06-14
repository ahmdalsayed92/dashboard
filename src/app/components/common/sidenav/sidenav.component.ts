import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  projectsSubMenuActive = false;
  Project360SubMenuActive = false;
  projectId;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.url;
        const pathSplited = path.split("/");
        this.projectId = pathSplited[pathSplited.length - 1];
        if (path.includes("ProjectDetails")) {
          this.Project360SubMenuActive = true;
          this.projectsSubMenuActive = false;
        } else {
          this.Project360SubMenuActive = false;
        }
      }
    });
  }

  ngOnInit(): void {
    console.log(this.Project360SubMenuActive);
  }

  closeProjectSubMenu() {
    this.projectsSubMenuActive = false;
  }
  toggleProjectsSubMenu() {
    this.projectsSubMenuActive = !this.projectsSubMenuActive;
  }
}
