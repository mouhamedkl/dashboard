import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEchartsComponent } from './chart-echarts.component';

describe('ChartEchartsComponent', () => {
  let component: ChartEchartsComponent;
  let fixture: ComponentFixture<ChartEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartEchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
