import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProjectsListService } from "../../services/projects-list.service";

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  constructor(private ProjectsListService: ProjectsListService) {}

  newProjectForm = new FormGroup({
    projectName: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    poNumber: new FormControl(""),
    projectManager: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    sector: new FormControl("", [Validators.required]),
    portfolio: new FormControl(""),
    program: new FormControl(""),
    owner: new FormControl("", [Validators.required]),
    sponser: new FormControl("", [Validators.required]),
    startDate: new FormControl("", [Validators.required]),
    currentStage: new FormControl(""),
  });

  sectorList = [
    { value: "Department 1" },
    { value: "related 1" },
    { value: "related 2" },
    { value: "related 3" },
    { value: "related 4" },
  ];
  data = [
    {
      id: 1,
      name: "ahmed mohamed",
      avatar: "../../../../assets/img/avatar1.png",
    },
    {
      id: 2,
      name: "sara ibrahem",
      avatar: "../../../../assets/img/avatar2.png",
    },
    {
      id: 1,
      name: "gamal sayed",
      avatar: "../../../../assets/img/avatar3.png",
    },
  ];
  closeOtherDropdowns = true;
  formSubmitted = false;
  openModal = false;
  ngOnInit(): void {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.newProjectForm.valid) {
      this.ProjectsListService.addProject(this.newProjectForm.value);
      this.openModal = true;
    }
  }
  getSelectedValue(event, control) {
    this.newProjectForm.controls[control].setValue(event);
  }
  clearData(e, control) {
    if (e === true) {
      this.newProjectForm.controls[control].reset();
    }
  }
  opened(event) {
    this.closeOtherDropdowns = event;
    return this.closeOtherDropdowns;
  }
}
