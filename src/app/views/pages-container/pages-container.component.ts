import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { PagesDetailsService } from "../../services/pages-details.service";

@Component({
  selector: "app-pages-container",
  templateUrl: "./pages-container.component.html",
  styleUrls: ["./pages-container.component.scss"],
})
export class PagesContainerComponent implements OnInit {
  pageDetails;
  constructor(
    private router: Router,
    private PagesDetailsService: PagesDetailsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.url;
        console.log(path);
        this.pageDetails = this.PagesDetailsService.getPageDetails(path);
        this.pageDetails.forEach((i) => {
          this.pageDetails = {
            title: i.title,
            subTitle: i.subTitle,
            type: i.type,
          };
        });
      }
    });
  }
  ngOnInit(): void {}
}
