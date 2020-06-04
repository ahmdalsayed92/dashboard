import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { PortfoliosComponent } from "./views/portfolios/portfolios.component";
import { ProgramsComponent } from "./views/programs/programs.component";
import { ProjectComponent } from "./views/projects/project/project.component";
import { RecycleBinComponent } from "./views/recycle-bin/recycle-bin.component";
import { MyDashBoardComponent } from "./views/my-dash-board/my-dash-board.component";
import { ProjectAllComponent } from "./views/project-all/project-all.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { PortfolioComponent } from "./views/portfolios/portfolio/portfolio.component";
import { ProgramComponent } from "./views/programs/program/program.component";
import { HealthIndexComponent } from "./views/health-index/health-index.component";

const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "DashBorad", component: MyDashBoardComponent },
  { path: "HealthIndex", component: HealthIndexComponent },
  { path: "Portfolios", component: PortfoliosComponent },
  { path: "Programs", component: ProgramsComponent },
  { path: "Project", component: ProjectComponent },
  { path: "Projects", component: ProjectsComponent },
  { path: "Profile", component: ProfileComponent },
  { path: "PortfolioDetails/:id", component: PortfolioComponent },
  { path: "ProgramDetails/:id", component: ProgramComponent },
  { path: "ProgramDetails/:id", component: ProgramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
