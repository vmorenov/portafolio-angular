import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { About } from './pages/about/about';
import { Clients } from './pages/clients/clients';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, About, Clients, Projects, Contact],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-navbar></app-navbar>
      <main class="flex-fill container">
        <section id="about"><app-about></app-about></section>
        <section id="clients"><app-clients></app-clients></section>
        <section id="projects"><app-projects></app-projects></section>
        <section id="contact"><app-contact></app-contact></section>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class App {}
