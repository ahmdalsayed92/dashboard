import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PortfolioListService {
  portfolios;
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe((data) => {
    //   return data;
    // });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/portfolio-list.json");
  }
}
// this.getJSON().subscribe((data) => {
//   console.log(data.PortfolioList.filter((portfolio) => portfolio.id == id));
//   return data.PortfolioList.filter((portfolio) => portfolio.id == id);
// });
