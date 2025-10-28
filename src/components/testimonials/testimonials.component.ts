import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  author: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      author: 'Samantha E.',
      rating: 5,
      text: 'Extremely skilled and hard working block architect and mason. Amazing attention to detail in plan creation and construction processes.'
    },
    {
      author: 'Eduardo Z.',
      rating: 5,
      text: 'They are very professional, respectful and all Ways good quality Work and safety in Masonry'
    },
    {
      author: 'John D.',
      rating: 5,
      text: 'Best block contractors in the business. Fare and efficient.'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
