import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyEmployeesManagementComponent } from './agency-employees-management.component';

describe('AgencyEmployeesManagementComponent', () => {
  let component: AgencyEmployeesManagementComponent;
  let fixture: ComponentFixture<AgencyEmployeesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyEmployeesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyEmployeesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
