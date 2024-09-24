import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisCzlowiekaComponent } from './opis-czlowieka.component';

describe('OpisCzlowiekaComponent', () => {
  let component: OpisCzlowiekaComponent;
  let fixture: ComponentFixture<OpisCzlowiekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpisCzlowiekaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpisCzlowiekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
