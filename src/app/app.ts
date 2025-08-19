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
      <section id="hero" class="container"><app-hero></app-hero></section>
      <section id="about" class="section-band band-iris">
        <div class="container">
          <app-about></app-about>
        </div>
      </section>
      <section id="clients" class="section-band band-cyan">
        <div class="container">
          <app-clients></app-clients>
        </div>
      </section>
      <section id="projects" class="section-band band-sky">
        <div class="container">
          <app-projects></app-projects>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  `,
})
export class App { }
