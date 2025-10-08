import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

interface CarouselItem {
  type: 'video' | 'image';
  src: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: false
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselVideo') carouselVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('carouselSection') carouselSection?: ElementRef<HTMLElement>;
  
  private observer: IntersectionObserver;
  
  items: CarouselItem[] = [
    { type: 'video', src: 'assets/videos/videopresentation.mp4' },
    { type: 'image', src: 'assets/images/switchfoto1.jpg' },
    { type: 'image', src: 'assets/images/switchfoto2.jpg' },
    { type: 'image', src: 'assets/images/switchfoto3.jpg' },
    { type: 'image', src: 'assets/images/switchfoto4.jpg' }
  ];
  currentIndex = 0;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.items[this.currentIndex].type === 'video') {
            this.playVideo();
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  ngAfterViewInit() {
    if (this.carouselSection) {
      this.observer.observe(this.carouselSection.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.carouselSection) {
      this.observer.unobserve(this.carouselSection.nativeElement);
    }
    this.observer.disconnect();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.handleVideoPlayback();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.handleVideoPlayback();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.handleVideoPlayback();
  }

  private handleVideoPlayback() {
    if (this.items[this.currentIndex].type === 'video') {
      setTimeout(() => {
        this.playVideo();
      }, 50);
    }
  }

  private playVideo() {
    if (this.carouselVideo) {
      const video = this.carouselVideo.nativeElement;
      video.muted = true;
      video.volume = 0;
      
      video.addEventListener('play', () => {
        video.muted = true;
        video.volume = 0;
      });

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Erro ao iniciar o vídeo do carrossel:', error);
        });
      }
    }
  }
} 