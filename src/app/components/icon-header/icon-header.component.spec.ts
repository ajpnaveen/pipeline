import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHeaderComponent } from './icon-header.component';

describe('IconHeaderComponent', () => {
  let component: IconHeaderComponent;
  let fixture: ComponentFixture<IconHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
