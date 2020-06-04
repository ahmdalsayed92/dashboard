import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PagesDetailsService {
  constructor() {}
  pages = [
    {
      id: "",
      title: "home",
      subTitle: "sub title",
      type: "home",
      path: "/Home",
    },
    {
      id: "",
      title: "dashboard",
      subTitle: "sub title",
      type: "dashboard",
      path: "/DashBorad",
    },
    {
      id: "",
      title: "health index",
      subTitle: "sub title",
      type: "healthIndex",
      path: "/HealthIndex",
    },
    {
      id: "",
      title: "portfolios",
      subTitle: "sub title",
      type: "portfolios-list",
      path: "/Portfolios",
    },
    {
      id: "",
      title: "programs",
      subTitle: "sub title",
      type: "programs-list",
      path: "/Programs",
    },
    {
      id: "",
      title: "projetcs",
      subTitle: "sub title",
      type: "projects-list",
      path: "/Projects",
    },
    {
      id: "",
      title: "profile",
      subTitle: "sub title",
      type: "profile",
      path: "/Profile",
    },
  ];

  getPageDetails(path) {
    return this.pages.filter((p) => p.path === path);
  }
}
