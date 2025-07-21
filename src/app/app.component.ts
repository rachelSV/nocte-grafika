import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CardTitleTextImgButtonComponent } from './components/card-title-text-img-button/card-title-text-img-button.component';
import { SplineComponent } from "./components/spline/spline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardTitleTextImgButtonComponent,
    SplineComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nocte-grafika';

  aboutMeList = [
    {
      title: 'LOGO CREATION',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...`,
      imgPath: '/assets/images/card_logo.avif',
      imgAlt: 'creation logo',
      imgPosition: 'left'
    },
    {
      title: 'WEBSITE CONCEPTION',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...`,
      imgPath: '/assets/images/red_woman.avif',
      imgAlt: 'website logo',
      imgPosition: 'right'
    },
    {
      title: 'GRAPHISME',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...`,
      imgPath: '/assets/images/medieval_red.avif',
      imgAlt: 'graphisme logo',
      imgPosition: 'left'
    }
  ];
}
