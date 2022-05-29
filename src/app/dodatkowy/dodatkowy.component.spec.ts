import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodatkowyComponent } from './dodatkowy.component';

describe('DodatkowyComponent', () => {
  let component: DodatkowyComponent;
  let fixture: ComponentFixture<DodatkowyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodatkowyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatkowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
