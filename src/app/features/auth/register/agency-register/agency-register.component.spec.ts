import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRegisterComponent } from './agency-register.component';

describe('AgencyRegisterComponent', () => {
  let component: AgencyRegisterComponent;
  let fixture: ComponentFixture<AgencyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
