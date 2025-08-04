import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  navLinks = [
    { fragment: 'about', label: 'Acerca de mí' },
    { fragment: 'projects', label: 'Proyectos' },
    { fragment: 'contact', label: 'Contacto' }
  ];
}
