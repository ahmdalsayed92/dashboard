import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { PortfolioListService } from "../../../services/portfolio-list.service";
import { Observable } from "rxjs";
import { Portfolio } from "src/app/models/portfolio";

@Component({
  selector: "app-program",
  templateUrl: "./program.component.html",
  styleUrls: ["./program.component.scss"],
})
export class ProgramComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PortfolioListService: PortfolioListService
  ) {}
  pageDetails: Observable<Portfolio>;
  options = {
    readOnly: true,
    size: 180,
    unit: "",
    textColor: "#e8236f",
    fontSize: "36",
    fontWeigth: "700",
    valueformat: "percent",
    value: 0,
    max: 100,
    trackWidth: 18,
    barWidth: 18,
    trackColor: "#eeeeee",
    barColor: "#e8236f",
    barCap: 10,
  };
  value = 45.2;

  googleChart = {
    type: "PieChart",
    data: [
      ["Software Project Proposal", 45],
      ["Technology Proposal", 30],
      ["Formal Software Project", 10],
      ["Software Development", 5],
      ["Software Engineering", 5],
      ["Ultimate Guide", 5],
    ],
    chartColumns: ["City", "Inhabitants"],
    options: {
      pieHole: 0.6,
      colors: [
        "#a54ee1",
        "#ae8bc7",
        "#1bced8",
        "#9cc8ca",
        "#e3d5e6",
        "#e8e8e8",
      ],
    },
  };

  ngOnInit(): void {
    this.getPageDetails();
  }
  ngAfterViewInit() {}
  getPageDetails() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.PortfolioListService.getJSON().subscribe((details) => {
      this.pageDetails = details.PortfolioList.filter(
        (portfolio) => portfolio.id == id
      );
      console.log(this.pageDetails);
    });
  }
}
