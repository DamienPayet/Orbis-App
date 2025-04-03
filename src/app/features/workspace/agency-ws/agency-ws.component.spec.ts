import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyWsComponent } from './agency-ws.component';

describe('AgencyWsComponent', () => {
  let component: AgencyWsComponent;
  let fixture: ComponentFixture<AgencyWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyWsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
