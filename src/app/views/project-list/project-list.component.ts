import { Component, OnInit } from "@angular/core";
import { ProjectsListService } from "../../services/projects-list.service";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
})
export class ProjectListComponent implements OnInit {
  constructor(private ProjectsListService: ProjectsListService) {}
  projectList;
  searchString;

  ngOnInit(): void {
    this.projectList = this.ProjectsListService.getProjectsList();
  }
}
