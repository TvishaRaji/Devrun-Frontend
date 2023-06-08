import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbComponent } from './searchb.component';

describe('SearchbComponent', () => {
  let component: SearchbComponent;
  let fixture: ComponentFixture<SearchbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
