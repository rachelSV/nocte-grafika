import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title-text-img-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-title-text-img-button.component.html',
  styleUrl: './card-title-text-img-button.component.scss'
})
export class CardTitleTextImgButtonComponent {

  @Input() title: string = '';
  @Input() description: string = '';

  @Input() containerClass: string = 'glassmorphism p-6 sm:p-8  w-full rounded-lg shadow-lg';
  @Input() titleClass: string = 'text-3xl sm:text-4xl text-primary font-fraktur mb-4 uppercase';
  @Input() descriptionClass: string = 'text-primary text-sm sm:text-base leading-relaxed mb-6';
}