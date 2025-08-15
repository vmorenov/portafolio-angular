import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

type Section = 'about' | 'projects' | 'experience' | 'clients' | 'contact';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit, OnDestroy {
  active: Section = 'about';
  lang: 'es' | 'en' = 'es';
  scrolled = false;
  menuOpen = false;

  /** true cuando el documento está en dark mode */
  isDark = false;

  private isBrowser: boolean;
  private onScrollHandler?: () => void;
  private onResizeHandler?: () => void;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang') as 'es' | 'en' | null;
      if (savedLang) this.lang = savedLang;
    }
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    // Estado inicial del tema
    const pref = localStorage.getItem('theme');
    this.isDark = pref === 'dark';
    document.documentElement.classList.toggle('dark-theme', this.isDark);

    // Navbar cambia a "scrolled" al bajar
    this.onScrollHandler = () => { this.scrolled = window.scrollY > 24; };
    this.onScrollHandler();
    window.addEventListener('scroll', this.onScrollHandler, { passive: true });

    // Cerrar drawer si pasa a desktop
    this.onResizeHandler = () => {
      if (window.innerWidth > 992 && this.menuOpen) this.closeMenu();
    };
    window.addEventListener('resize', this.onResizeHandler);
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;
    if (this.onScrollHandler) window.removeEventListener('scroll', this.onScrollHandler);
    if (this.onResizeHandler) window.removeEventListener('resize', this.onResizeHandler);
  }

  /* Ir a la raíz del proyecto + scroll al tope */
  goHome() {
    if (!this.isBrowser) return;
    history.replaceState(null, '', location.pathname + location.search); // quita #hash
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.active = 'about';
    this.closeMenu();
  }

  go(section: Section) {
    this.active = section;
    if (!this.isBrowser) return;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${section}`);
    this.closeMenu();
  }

  toggleMenu() {
    if (!this.isBrowser) return;
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu() {
    if (!this.isBrowser) return;
    if (!this.menuOpen) return;
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  /** Cambia el tema y sincroniza el icono 🌙/☀️ */
  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark-theme', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  setLang(language: 'es' | 'en') {
    this.lang = language;
    if (this.isBrowser) localStorage.setItem('lang', language);
  }
}
