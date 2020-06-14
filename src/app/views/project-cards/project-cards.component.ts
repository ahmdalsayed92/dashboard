import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProjectsListService } from "../../services/projects-list.service";

import * as c3 from "c3";

@Component({
  selector: "app-project-cards",
  templateUrl: "./project-cards.component.html",
  styleUrls: ["./project-cards.component.scss"],
})
export class ProjectCardsComponent implements OnInit {
  constructor(private ProjectsListService: ProjectsListService) {}
  projectList;
  searchString;

  ngOnInit(): void {
    this.projectList = this.ProjectsListService.getProjectsList();
  }

  ngAfterViewInit() {
    let chart = c3.generate({
      bindto: "#chart",
      data: {
        columns: [["HEALTH", 91.4]],
        type: "gauge",
      },
      legend: {
        show: false,
      },
      color: { pattern: ["#9c4fe7"] },
      size: { height: 90 },
    });
    let chart2 = c3.generate({
      bindto: "#gauge2",
      data: { columns: [["HEALTH", 49]], type: "gauge" },
      legend: { show: false },
      color: { pattern: ["#dc3545"] },
      size: { width: 150, height: 90 },
    });
  }
}
