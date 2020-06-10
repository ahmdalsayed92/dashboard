import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectsListService {
  constructor() {}
  projects = [
    {
      id: "",
      projectName: "ibm",
      poNumber: "sub title",
      projectManager: "home",
      department: "/Home",
      sector: "This is the latest stawtus",
      owner: "ahmed mohamed",
    },
    {
      id: "",
      projectName: "stc",
      poNumber: "sub title",
      projectManager: "home",
      department: "/Home",
      sector: "This is the latest stawtus",
      owner: "ahmed mohamed",
    },
    {
      id: "",
      projectName: "google",
      poNumber: "sub title",
      projectManager: "home",
      department: "/Home",
      sector: "This is the latest stawtus",
      owner: "eslam mohamed",
    },
    {
      id: "",
      projectName: "home",
      poNumber: "sub title",
      projectManager: "home",
      department: "/Home",
      sector: "This is the latest stawtus",
      owner: "mostafa darwesh",
    },
    {
      id: "",
      projectName: "apple",
      poNumber: "sub title",
      projectManager: "salwa khatab",
      department: "it",
      sector: "This is the latest stawtus",
      owner: "morad ahmed",
    },
  ];

  getProjectsList() {
    return this.projects;
  }
  addProject(project) {
    this.projects.push(project);
  }
}