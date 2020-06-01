import { Component, OnInit } from "@angular/core";
import { PortfolioListService } from "../../services/portfolio-list.service";

@Component({
  selector: "app-portfolios",
  templateUrl: "./portfolios.component.html",
  styleUrls: ["./portfolios.component.scss"],
})
export class PortfoliosComponent implements OnInit {
  constructor(private PortfolioListService: PortfolioListService) {}
  pageType = "portfolios-list";
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
