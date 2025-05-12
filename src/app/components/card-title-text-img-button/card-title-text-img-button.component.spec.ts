import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleTextImgButtonComponent } from './card-title-text-img-button.component';

describe('CardTitleTextImgButtonComponent', () => {
  let component: CardTitleTextImgButtonComponent;
  let fixture: ComponentFixture<CardTitleTextImgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTitleTextImgButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTitleTextImgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
