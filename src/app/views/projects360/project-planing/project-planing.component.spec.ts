import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPlaningComponent } from './project-planing.component';

describe('ProjectPlaningComponent', () => {
  let component: ProjectPlaningComponent;
  let fixture: ComponentFixture<ProjectPlaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPlaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
