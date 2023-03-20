import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavarropasComponent } from './lavarropas.component';

describe('LavarropasComponent', () => {
  let component: LavarropasComponent;
  let fixture: ComponentFixture<LavarropasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavarropasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavarropasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
