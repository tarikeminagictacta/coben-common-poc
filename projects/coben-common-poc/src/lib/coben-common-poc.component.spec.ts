import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobenCommonPocComponent } from './coben-common-poc.component';

describe('CobenCommonPocComponent', () => {
  let component: CobenCommonPocComponent;
  let fixture: ComponentFixture<CobenCommonPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobenCommonPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobenCommonPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
