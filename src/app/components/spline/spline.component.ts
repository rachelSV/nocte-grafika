import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-spline',
  standalone: true,
  imports: [],
  templateUrl: './spline.component.html',
  styleUrl: './spline.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 ajoute ça ici

})
export class SplineComponent {

}
