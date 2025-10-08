import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  standalone: false
})
export class LocationComponent {
  address: string = 'Rua Padre Pedro de Alencar, 148 - Messejana, Fortaleza - CE, 60840-280';
  coordinates = {
    lat: -3.8288731243874228,
    lng: -38.494053258684595
  };

  mapUrl: SafeResourceUrl;

  businessHours = [
    { days: 'Segunda a Sexta', hours: '05:30 às 22:00' },
    { days: 'Sábado', hours: '06:00 às 12:00' },
    { days: 'Domingo', hours: '08:00 às 12:00' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Usando o formato simples do Google Maps para coordenadas
    const url = `https://maps.google.com/maps?q=${this.coordinates.lat},${this.coordinates.lng}&z=17&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 