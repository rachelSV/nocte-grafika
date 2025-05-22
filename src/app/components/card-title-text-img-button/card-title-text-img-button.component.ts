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

  @Input() containerClass: string = 'glassmorphism p-6 sm:p-8 w-full rounded-lg shadow-lg';
  @Input() titleClass: string = 'text-3xl sm:text-4xl text-primary font-fraktur mb-4 uppercase';
  @Input() descriptionClass: string = 'text-primary text-sm sm:text-base leading-relaxed mb-6';

  @Input() imgPath: string = '';
  @Input() imgAlt: string = '';
  @Input() imgClass: string = 'w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-4';
  @Input() showImg: boolean = true;
  @Input() imgPosition: 'left' | 'right' = 'left';
  
  @Input() buttonClass: string = 'bg-primary text-white py-2 px-4 hover:bg-secondary transition duration-300 ease-in-out';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '#';
  @Input() showButton: boolean = true;
  
}