import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorWsComponent } from './content-creator-ws.component';

describe('ContentCreatorWsComponent', () => {
  let component: ContentCreatorWsComponent;
  let fixture: ComponentFixture<ContentCreatorWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCreatorWsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCreatorWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
