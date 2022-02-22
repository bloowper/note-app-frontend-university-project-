import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainScreenComponent } from './task-main-screen.component';

describe('TaskMainScreenComponent', () => {
  let component: TaskMainScreenComponent;
  let fixture: ComponentFixture<TaskMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
