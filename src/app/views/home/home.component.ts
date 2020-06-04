import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  MyWorkListTableData = {
    title: "My Work List",
    buttons: [
      { text: "done", color: "#4f008c" },
      { text: "important", color: "#ff0000" },
    ],
    barButton: true,
    colsHeaders: ["Approve", "Work List", "Project Name", "Delete"],
    priorityCol: true,
    rowsData: [
      {
        workList: "Planning to Execution Approval",
        projectName: "Digital Transformation",
        priority: "high",
      },
      {
        workList: "Project Planning",
        projectName: "Procure-to-Pay automation",
        priority: "low",
      },
      {
        workList: "Project Charter",
        projectName: "mySTC Revamp",
        priority: "high",
      },
      {
        workList: "Base Line",
        projectName: "ERP Upgrade",
        priority: "low",
      },
      {
        workList: "Project Charter",
        projectName: "ERP Upgrade",
        priority: "low",
      },
      {
        workList: "Project Closure",
        projectName: "Revenue Assurance",
        priority: "low",
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
