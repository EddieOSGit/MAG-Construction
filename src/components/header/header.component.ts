
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Services', sectionId: 'services' },
    { label: 'About', sectionId: 'about' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(sectionId: string) {
    this.isMobileMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }
}