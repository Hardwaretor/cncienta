import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamListComponent } from './cam-list.component';

describe('CamListComponent', () => {
  let component: CamListComponent;
  let fixture: ComponentFixture<CamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
