import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorComponent } from './professor.component';

describe('ProfessorComponent', () => {
  let component: ProfessorComponent;
  let fixture: ComponentFixture<ProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
