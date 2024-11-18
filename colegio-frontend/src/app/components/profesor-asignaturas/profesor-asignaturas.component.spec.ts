import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorAsignaturasComponent } from './profesor-asignaturas.component';

describe('ProfesorAsignaturasComponent', () => {
  let component: ProfesorAsignaturasComponent;
  let fixture: ComponentFixture<ProfesorAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesorAsignaturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
