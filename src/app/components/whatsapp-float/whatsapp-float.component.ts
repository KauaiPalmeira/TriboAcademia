import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.component.html',
  styleUrls: ['./whatsapp-float.component.css'],
  standalone: false // Adicionando esta linha para resolver o problema anterior
})
export class WhatsappFloatComponent {

  isVisible = false;
  private scrollThreshold = 400; // A partir de quando o botão aparece

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // --- LÓGICA ADICIONADA ---
    // Pega a altura total da página e a altura da janela do navegador
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Define uma "zona do rodapé" (ex: os últimos 300 pixels da página)
    const footerZone = pageHeight - windowHeight - 700; 

    // O botão só será visível se:
    // 1. O usuário já passou do scroll inicial (scrollThreshold)
    // 2. E AINDA NÃO entrou na zona do rodapé
    this.isVisible = scrollPosition > this.scrollThreshold && scrollPosition < footerZone;
  }
}