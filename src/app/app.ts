import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, About, Projects, Contact],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-navbar></app-navbar>

      <main class="flex-fill container">
        <section id="about"><app-about></app-about></section>
        <section id="projects"><app-projects></app-projects></section>
        <section id="contact"><app-contact></app-contact></section>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class App {}