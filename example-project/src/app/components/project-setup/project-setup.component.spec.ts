import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectSetupComponent } from './getting-started.component';

describe('GettingStartedComponent', () => {
  let component: ProjectSetupComponent;
  let fixture: ComponentFixture<ProjectSetupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
