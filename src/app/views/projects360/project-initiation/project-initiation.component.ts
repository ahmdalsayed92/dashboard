import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-project-initiation",
  templateUrl: "./project-initiation.component.html",
  styleUrls: ["./project-initiation.component.scss"],
})
export class ProjectInitiationComponent implements OnInit {
  constructor() {}
  addNewfields = false;
  openedForm = "";
  charterForm = new FormGroup({
    objectives: new FormControl("", [Validators.required]),
    scope: new FormControl("", [Validators.required]),
    outOfScope: new FormControl("", [Validators.required]),
    assumption: new FormControl("", [Validators.required]),
  });
  strategicForm = new FormGroup({
    digitize: new FormControl("", [Validators.required]),
    accelerate: new FormControl("", [Validators.required]),
    reInvent: new FormControl("", [Validators.required]),
    expand: new FormControl("", [Validators.required]),
    operational: new FormControl("", [Validators.required]),
    others: new FormControl("", [Validators.required]),
  });
  stakeholdersForm = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    jobTitle: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
    power: new FormControl("", [Validators.required]),
    interest: new FormControl("", [Validators.required]),
    busPhone: new FormControl(""),
    action: new FormControl(""),
    mobNumber: new FormControl(""),
    expectation: new FormControl(""),
    communication: new FormControl(""),
    notes: new FormControl(""),
  });
  diceForm = new FormGroup({
    name: new FormControl(""),
    startDate: new FormControl(""),
    spoc: new FormControl(""),
    weight: new FormControl(""),
    type: new FormControl(""),
    baselineYear: new FormControl(""),
    kpiStatus: new FormControl(""),
    baselineValue: new FormControl(""),
    unitOfMeasure: new FormControl(""),
    targetType: new FormControl(""),
    aimeToBe: new FormControl(""),
    reportingCycle: new FormControl(""),
    target2018: new FormControl(""),
    target2019: new FormControl(""),
    target2020: new FormControl(""),
    relatedMilestone: new FormControl(""),
    kpiNumber: new FormControl(""),
    notes: new FormControl(""),
  });

  milestonesForm = new FormGroup({
    title: new FormControl(""),
    startDate: new FormControl(""),
    dueDate: new FormControl(""),
    owner: new FormControl(""),
    weight: new FormControl(""),
    deliverables: new FormControl(""),
    dependencies: new FormControl(""),
  });
  riskListForm = new FormGroup({
    description: new FormControl(""),
    probability: new FormControl(""),
    impact: new FormControl(""),
    owner: new FormControl(""),
    date: new FormControl(""),
    status: new FormControl(""),
    resolutionDate: new FormControl(""),
    mitigationAction: new FormControl(""),
    milestoneRelated: new FormControl(""),
    notes: new FormControl(""),
  });
  dependenciesForm = new FormGroup({});
  raciForm = new FormGroup({
    activity: new FormControl(""),
    responsible: new FormControl(""),
    accountable: new FormControl(""),
    consulted: new FormControl(""),
    informed: new FormControl(""),
  });
  rigorForm = new FormGroup({});
  escalationForm = new FormGroup({
    escalationTopic: new FormControl(""),
    level1: new FormControl(""),
    level2: new FormControl(""),
    level3: new FormControl(""),
  });
  benefitRealizationForm = new FormGroup({
    description: new FormControl(""),
    owner: new FormControl(""),
    targetValue: new FormControl(""),
    measurement: new FormControl(""),
    relatedMilestone: new FormControl(""),
    plannedResolutionDate: new FormControl(""),
  });
  charterList = [
    {
      objectives: "there is no available",
      scope: "Accountant",
      outOfScope: "Tokyo",
      assumption: 33,
      currentStage: "2008/11/28",
    },
    {
      objectives: "there is no available",
      scope: "Accountant",
      outOfScope: "Tokyo",
      assumption: 33,
      currentStage: "2008/11/28",
    },
  ];
  strategicList = [
    {
      digitize: true,
      accelerate: false,
      reInvent: false,
      expand: true,
      operational: false,
      others: true,
    },
    {
      digitize: false,
      accelerate: false,
      reInvent: true,
      expand: true,
      operational: true,
      others: false,
    },
  ];
  stakeholdersList = [{}];

  ngOnInit(): void {}
  addNew(form: string) {
    this.addNewfields = true;
    this.openedForm = form;
  }
  closeForm() {
    this.addNewfields = false;
    this.openedForm = "";
  }
  onSubmit(form, formType) {
    console.log(form);
    switch (formType) {
      case "charter":
        this.charterList.push(form.value);
        break;
      case "strategic":
        this.strategicList.push(form.value);
        break;
      case "stakeholders":
        this.stakeholdersList.push(form.value);
        break;
      default:
        break;
    }
  }
}
