import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarUpdatePage } from './car-update.page';

describe('CarUpdatePage', () => {
  let component: CarUpdatePage;
  let fixture: ComponentFixture<CarUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
