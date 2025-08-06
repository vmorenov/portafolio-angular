import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  navLinks = [
    { fragment: 'about', label: 'Acerca de mí' },
    { fragment: 'projects', label: 'Proyectos' },
    { fragment: 'contact', label: 'Contacto' }
  ];

  isDark = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      const prefers = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
      this.isDark = saved ? saved === 'dark' : prefers;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.isDark) root.classList.add('dark-theme');
      else root.classList.remove('dark-theme');
    }
  }
}
