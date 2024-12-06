import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeTrabalheiComponent } from './onde-trabalhei.component';

describe('OndeTrabalheiComponent', () => {
  let component: OndeTrabalheiComponent;
  let fixture: ComponentFixture<OndeTrabalheiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OndeTrabalheiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OndeTrabalheiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
