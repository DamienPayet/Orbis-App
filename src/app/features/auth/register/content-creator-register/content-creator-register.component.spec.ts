import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorRegisterComponent } from './content-creator-register.component';

describe('ContentCreatorRegisterComponent', () => {
  let component: ContentCreatorRegisterComponent;
  let fixture: ComponentFixture<ContentCreatorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCreatorRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCreatorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
