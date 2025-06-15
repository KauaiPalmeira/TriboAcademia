import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: false
})
export class FooterComponent {
  contatosActive = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const contatosSection = document.getElementById('contatos');
    if (contatosSection) {
      const rect = contatosSection.getBoundingClientRect();
      this.contatosActive = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
    }
  }
} 