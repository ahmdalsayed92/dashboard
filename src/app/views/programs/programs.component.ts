import { Component, OnInit } from "@angular/core";
import { PortfolioListService } from "../../services/portfolio-list.service";

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.scss"],
})
export class ProgramsComponent implements OnInit {
  constructor(private PortfolioListService: PortfolioListService) {}

  pageType = "programs-list";
  pageDetails;

  ngOnInit(): void {
    this.getPageDetails();
  }

  getPageDetails() {
    this.PortfolioListService.getJSON().subscribe((details) => {
      this.pageDetails = details.PortfolioList;
    });
  }
}
