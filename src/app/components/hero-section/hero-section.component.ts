import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: false
})
export class HeroSectionComponent implements AfterViewInit, OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('typingText') typingText!: ElementRef<HTMLSpanElement>;
  isMuted = true;
  isPlaying = true;

  private typingMessage = 'DESCUBRA COMO ALCANÇAR SEUS OBJETIVOS DE FORMA SAUDÁVEL E DIVERTIDA';
  private typingIndex = 0;

  ngOnInit() {
    // Garante que o vídeo será carregado
    const video = document.createElement('video');
    video.src = 'assets/videos/videotoppage.mp4';
    video.load();
  }

  ngAfterViewInit() {
    // Tenta iniciar o vídeo
    const playVideo = () => {
      const video = this.videoPlayer.nativeElement;
      video.muted = true; // Garante que o vídeo começa mutado
      video.volume = 0; // Define o volume como 0
      video.play().catch(error => {
        console.log('Erro ao iniciar o vídeo:', error);
        // Tenta novamente após um pequeno delay
        setTimeout(playVideo, 1000);
      });
    };
    playVideo();
    this.startTypingEffect();
  }

  startTypingEffect() {
    if (!this.typingText) return;
    this.typingText.nativeElement.textContent = '';
    this.typingIndex = 0;
    this.typeNextChar();
  }

  typeNextChar() {
    if (this.typingIndex < this.typingMessage.length) {
      this.typingText.nativeElement.textContent += this.typingMessage.charAt(this.typingIndex);
      this.typingIndex++;
      setTimeout(() => this.typeNextChar(), 28);
    }
  }

  toggleSound() {
    this.isMuted = !this.isMuted;
    const video = this.videoPlayer.nativeElement;
    video.muted = this.isMuted;
    video.volume = this.isMuted ? 0 : 0.5;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.videoPlayer.nativeElement.pause();
    } else {
      this.videoPlayer.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }
} 