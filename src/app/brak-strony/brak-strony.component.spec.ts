import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakStronyComponent } from './brak-strony.component';

describe('BrakStronyComponent', () => {
  let component: BrakStronyComponent;
  let fixture: ComponentFixture<BrakStronyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrakStronyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakStronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
