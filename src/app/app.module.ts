// app modules
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// app views
import { HomeComponent } from "./views/home/home.component";
import { PortfoliosComponent } from "./views/portfolios/portfolios.component";
import { ProgramsComponent } from "./views/programs/programs.component";
import { ProjectComponent } from "./views/projects/project/project.component";
import { RecycleBinComponent } from "./views/recycle-bin/recycle-bin.component";
import { MyDashBoardComponent } from "./views/my-dash-board/my-dash-board.component";
import { ProjectAllComponent } from "./views/project-all/project-all.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { ProgramComponent } from "./views/programs/program/program.component";
import { PortfolioComponent } from "./views/portfolios/portfolio/portfolio.component";
import { ProfileComponent } from "./views/profile/profile.component";

// app components
import { NavbarComponent } from "./components/common/header/navbar/navbar.component";
import { TopToolsComponent } from "./components/common/header/tools/top-tools/top-tools.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { SidenavComponent } from "./components/common/sidenav/sidenav.component";
import { SearchComponent } from "./components/common/header/tools/search/search.component";
import { CardComponent } from "./components/card/card.component";
import { PagesContainerComponent } from "./views/pages-container/pages-container.component";

// extras
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChartsModule } from "ng2-charts";
import { KnobModule } from "@xmlking/ngx-knob";
import { GoogleChartsModule } from "angular-google-charts";
import { HealthIndexComponent } from './views/health-index/health-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    ProgramsComponent,
    ProjectComponent,
    RecycleBinComponent,
    MyDashBoardComponent,
    ProjectAllComponent,
    ProgramsComponent,
    NavbarComponent,
    TopToolsComponent,
    ProjectsComponent,
    ProgramComponent,
    PortfolioComponent,
    ProfileComponent,
    FooterComponent,
    SidenavComponent,
    SearchComponent,
    CardComponent,
    PagesContainerComponent,
    HealthIndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    KnobModule,
    ChartsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
