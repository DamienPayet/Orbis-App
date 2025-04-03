import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorspaceAgencyLayoutComponent } from './worspace-agency-layout.component';

describe('WorspaceAgencyLayoutComponent', () => {
  let component: WorspaceAgencyLayoutComponent;
  let fixture: ComponentFixture<WorspaceAgencyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorspaceAgencyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorspaceAgencyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
