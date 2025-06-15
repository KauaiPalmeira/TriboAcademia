import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlansComponent } from './plans/plans.component';
import { LocationComponent } from './location/location.component';
import { WhatsappFloatComponent } from './whatsapp-float/whatsapp-float.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    CarouselComponent,
    PlansComponent,
    LocationComponent,
    WhatsappFloatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    CarouselComponent,
    PlansComponent,
    LocationComponent,
    WhatsappFloatComponent
  ]
})
export class ComponentsModule { } 