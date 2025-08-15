import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { About } from './pages/about/about';
import { Clients } from './pages/clients/clients';
import { Projects } from './pages/projects/projects';
import { Hero } from './pages/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, About, Clients, Projects, Hero],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <section id="about" class="container"><app-about></app-about></section>
      <section id="clients" class="container"><app-clients></app-clients></section>
      <section id="projects" class="container"><app-projects></app-projects></section>

      <app-footer></app-footer>
    </div>
  `,
})
export class App {}
