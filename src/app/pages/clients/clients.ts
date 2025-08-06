import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css'],
})
export class Clients implements AfterViewInit, OnDestroy {
  clients = [
    { name: 'VTR', logo: 'assets/clients/vtr.png', description: 'Integración y APIs para servicios de telecomunicaciones.' },
    { name: 'Cruz Verde', logo: 'assets/clients/CruzVerde.png', description: 'Ecosistema de datos y procesos para retail farmacéutico.' },
    { name: 'Maicao', logo: 'assets/clients/Maicao.jpg', description: 'Automatización de flujos y reporting operativo.' },
    { name: 'Banco de Chile', logo: 'assets/clients/bcoChile.jpg', description: 'Integraciones bancarias seguras y alta disponibilidad.' },
    { name: 'Entel', logo: 'assets/clients/entel.png', description: 'Arquitectura para orquestación de servicios y BSS.' },
    { name: 'BNP Paribas Cardif', logo: 'assets/clients/bnp.svg', description: 'Soluciones cloud, pipelines CI/CD y microservicios.' }
  ];

  @ViewChild('track', { static: false }) trackRef?: ElementRef<HTMLElement>;

  private readonly isBrowser: boolean;
  private rafId: number | null = null;
  private lastTs = 0;
  private maxScroll = 0;          // scrollWidth - clientWidth
  private readonly speed = 40;    // px/seg (ajusta la velocidad)

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    this.recompute();
    this.start();
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  ngOnDestroy(): void {
    this.stop();
    if (this.isBrowser) window.removeEventListener('resize', this.onResize);
  }

  onEnter() { this.stop(); }
  onLeave() { this.start(); }

  private onResize = () => this.recompute();

  private recompute() {
    const t = this.trackRef?.nativeElement;
    if (!t) return;
    t.scrollLeft = 0;
    // cuánto puede desplazarse como máximo antes de reiniciar
    this.maxScroll = Math.max(0, t.scrollWidth - t.clientWidth);
  }

  private step = (ts: number) => {
    const t = this.trackRef?.nativeElement;
    if (!t) return;

    if (!this.lastTs) this.lastTs = ts;
    const dt = (ts - this.lastTs) / 1000; // seg
    this.lastTs = ts;

    t.scrollLeft += this.speed * dt;

    // Llegó al final → reinicia al principio (sin duplicar elementos)
    if (t.scrollLeft >= this.maxScroll - 1) {
      t.scrollLeft = 0; // “snap” simple; evita ver elementos repetidos
    }

    this.rafId = requestAnimationFrame(this.step);
  };

  private start() {
    if (this.rafId !== null) return;
    this.lastTs = 0;
    this.rafId = requestAnimationFrame(this.step);
  }

  private stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
