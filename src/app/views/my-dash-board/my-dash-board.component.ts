import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-dash-board",
  templateUrl: "./my-dash-board.component.html",
  styleUrls: ["./my-dash-board.component.scss"],
})
export class MyDashBoardComponent implements OnInit {
  constructor() {}
  MyProjectsTableData = {
    title: "My projects",
    buttons: [
      { text: "in progress", color: "#1bced8" },
      { text: "not started", color: "#767477" },
      { text: "delayed", color: "#fe365e" },
    ],
    barButton: false,
    priorityCol: false,
    checkboxes: false,
    colsHeaders: ["Projects Name", "Status", "deadline", "My Role"],
    rowsData: [
      {
        workList: "Planning to Execution Approval",
        projectName: "Digital Transformation",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
      {
        workList: "Project Planning",
        projectName: "Revenue Assurance Project",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
      {
        workList: "Project Charter",
        projectName: "ERP Upgrade",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
      {
        workList: "Base Line",
        projectName: "Procure-to-Pay Automation",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
      {
        workList: "Project Charter",
        projectName: "mySTC Revamp",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
      {
        workList: "Project Closure",
        projectName: "JIRA Upgrade",
        status: "Delayed",
        deadLine: "22/12/2020",
        myRole: "owner",
      },
    ],
  };
  ngOnInit(): void {}
}
