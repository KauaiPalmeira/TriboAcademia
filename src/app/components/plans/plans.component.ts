import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface Plan {
  title: string;
  price: string;
  installments?: string;
  totalPrice?: string;
  paymentMethods: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  standalone: false
})
export class PlansComponent implements AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo?: ElementRef<HTMLVideoElement>;
  
  activeTab: 'musculacao' | 'outros' = 'musculacao';

  musclePlans: Plan[] = [
    {
      title: 'MENSAL',
      price: 'R$ 99,00',
      paymentMethods: ['CRÉDITO', 'DÉBITO', 'PIX'],
      highlight: true
    },
    {
      title: 'SEMESTRAL',
      price: 'R$ 90,00',
      installments: '06X',
      paymentMethods: ['CRÉDITO', 'DÉBITO', 'PIX', 'ESPÉCIE']
    },
    {
      title: 'ANUAL',
      price: 'R$ 80,00',
      installments: '12X',
      paymentMethods: ['CRÉDITO', 'DÉBITO', 'PIX', 'ESPÉCIE']
    }
  ];

  otherPlans: Plan[] = [
    {
      title: 'RECORRÊNCIA',
      price: 'R$ 90,00',
      installments: '12X',
      paymentMethods: ['CRÉDITO']
    },
    {
      title: 'SEMI PERSONALIZADO',
      price: 'R$ 350,00',
      paymentMethods: ['MENSAL 3X SEMANA']
    },
    {
      title: 'ESPECIAL',
      price: 'R$ 550,00',
      paymentMethods: ['MENSAL 3X SEMANA']
    },
    {
      title: 'SEMI PERSONALIZADO',
      price: 'R$ 300,00',
      installments: '03X',
      totalPrice: 'R$ 900,00',
      paymentMethods: ['TRIMESTRAL']
    },
    {
      title: 'SEMI PERSONALIZADO',
      price: 'R$ 280,00',
      installments: '06X',
      totalPrice: 'R$ 1.680,00',
      paymentMethods: ['SEMESTRAL']
    },
    {
      title: 'SEMI PERSONALIZADO',
      price: 'R$ 250,00',
      installments: '12X',
      totalPrice: 'R$ 3.000,00',
      paymentMethods: ['ANUAL']
    }
  ];

  setActiveTab(tab: 'musculacao' | 'outros') {
    this.activeTab = tab;
  }

  ngAfterViewInit() {
    if (this.backgroundVideo) {
      const video = this.backgroundVideo.nativeElement;
      video.muted = true;
      video.volume = 0;
      video.play().catch(error => {
        console.log('Erro ao iniciar o vídeo de fundo:', error);
      });
    }
  }
} 