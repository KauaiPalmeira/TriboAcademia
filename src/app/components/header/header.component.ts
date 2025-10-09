import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {

  // Propriedade para controlar o estado do menu
  menuAberto = false;

  // Função para abrir/fechar o menu
  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
  
  // Função para fechar o menu ao clicar em um link
  closeMenu(): void {
    this.menuAberto = false;
  }
  
}