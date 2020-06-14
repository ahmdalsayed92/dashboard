import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInitiationComponent } from './project-initiation.component';

describe('ProjectInitiationComponent', () => {
  let component: ProjectInitiationComponent;
  let fixture: ComponentFixture<ProjectInitiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInitiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
