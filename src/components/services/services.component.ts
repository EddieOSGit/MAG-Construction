import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Commercial Masonry Construction',
      description: 'From office buildings to retail centers, we deliver superior commercial masonry that combines structural integrity with architectural excellence for large-scale developments.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661881799804-81f28239355c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzb25yeSUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900'
    },
    {
      title: 'Healthcare Facility Masonry',
      description: 'We have extensive experience providing masonry for hospitals and medical centers, understanding the unique requirements of healthcare construction and regulatory compliance.',
      imageUrl: 'https://images.unsplash.com/photo-1652677696160-531f58a00527?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpY2slMjBoZWFsdGhjYXJlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900'
    },
    {
      title: 'Industrial & Energy Sector Masonry',
      description: 'Specialized masonry solutions for manufacturing facilities, power plants, and industrial complexes that withstand extreme conditions while maintaining structural integrity.',
      imageUrl: 'https://images.unsplash.com/photo-1593275702377-ea58c8a148b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJyaWNrJTIwaGVhbHRoY2FyZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900'
    },
    {
      title: 'Infrastructure Masonry Projects',
      description: 'Bringing four decades of experience to large-scale public works projects, including retaining walls, sound barriers, transportation facilities, and civic structures.',
      imageUrl: 'https://images.unsplash.com/photo-1761384569592-11ece003e209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyaWNrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900'
    }
  ];
}