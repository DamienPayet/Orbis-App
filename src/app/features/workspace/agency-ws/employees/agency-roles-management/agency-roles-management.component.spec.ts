import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRolesManagementComponent } from './agency-roles-management.component';

describe('AgencyRolesManagementComponent', () => {
  let component: AgencyRolesManagementComponent;
  let fixture: ComponentFixture<AgencyRolesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyRolesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyRolesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
