
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  whyChooseUs = [
    { point: '42 Years of Experience: Four decades of proven excellence.' },
    { point: 'A+ BBB Rating: Recognized for integrity and satisfaction.' },
    { point: 'Licensed & Insured: Fully compliant with Arizona regulations.' },
    { point: 'Proven Track Record: Active projects across multiple high-value sectors.' },
    { point: 'Professional Leadership: Experienced management guiding every project.' },
  ];
}
