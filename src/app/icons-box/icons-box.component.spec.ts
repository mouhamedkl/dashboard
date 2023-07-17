import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBoxComponent } from './icons-box.component';

describe('IconsBoxComponent', () => {
  let component: IconsBoxComponent;
  let fixture: ComponentFixture<IconsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
