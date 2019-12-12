import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStartupComponent } from './list-startup.component';

describe('ListStartupComponent', () => {
  let component: ListStartupComponent;
  let fixture: ComponentFixture<ListStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
