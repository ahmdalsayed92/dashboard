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

const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "DashBorad", component: MyDashBoardComponent },
  { path: "Portfolios", component: PortfoliosComponent },
  { path: "Programs", component: ProgramsComponent },
  { path: "Project", component: ProjectComponent },
  { path: "Projects", component: ProjectsComponent },
  { path: "Project360", component: ProjectAllComponent },
  { path: "Profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
