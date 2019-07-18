import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyGraphComponent } from './study-graph.component';

describe('StudyGraphComponent', () => {
  let component: StudyGraphComponent;
  let fixture: ComponentFixture<StudyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
