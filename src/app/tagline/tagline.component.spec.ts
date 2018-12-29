import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineComponent } from './tagline.component';

describe('TaglineComponent', () => {
  let component: TaglineComponent;
  let fixture: ComponentFixture<TaglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
