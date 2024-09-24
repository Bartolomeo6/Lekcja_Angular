import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzlowiekComponent } from './czlowiek.component';

describe('CzlowiekComponent', () => {
  let component: CzlowiekComponent;
  let fixture: ComponentFixture<CzlowiekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CzlowiekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CzlowiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
