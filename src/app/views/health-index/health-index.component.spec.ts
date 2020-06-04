import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIndexComponent } from './health-index.component';

describe('HealthIndexComponent', () => {
  let component: HealthIndexComponent;
  let fixture: ComponentFixture<HealthIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
