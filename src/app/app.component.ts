import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CardTitleTextImgButtonComponent } from './components/card-title-text-img-button/card-title-text-img-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardTitleTextImgButtonComponent  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nocte-grafika';

  aboutMeList = [
  {
    title: 'About me ...',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...`,
    imgPath: '/assets/images/circle.png',
    imgAlt: 'Nocte Logo'
  }
];
}
