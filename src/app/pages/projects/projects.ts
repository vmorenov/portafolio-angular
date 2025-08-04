import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projectList = [
    {
      title: 'Gateway Spring Boot',
      description: 'Proyecto de Java Spring Boot de gateway',
      image: 'assets/icons/springboot.svg',
      link: 'https://github.com/vmorenov/gateway-springboot'
    },
    {
      title: 'CRUD Usuarios',
      description: 'CRUD de administración de usuarios',
      image: 'assets/icons/springboot.svg',
      link: 'https://github.com/vmorenov/crud-usuarios'
    },
    {
      title: 'Modelo Clínica',
      description: 'Proyecto Oracle PLSQL del modelo de clínica y farmacia',
      image: 'assets/icons/oracle.svg',
      link: 'https://github.com/vmorenov/modelo-clinica'
    },
    {
      title: 'Transporte Privado',
      description: 'Página de transporte privado hecha en Angular',
      image: 'assets/icons/angular.svg',
      link: 'https://github.com/vmorenov/transporte-privado'
    },
    {
      title: 'Portafolio Angular',
      description: 'Mi portafolio personal hecho en Angular',
      image: 'assets/icons/angular.svg',
      link: 'https://github.com/vmorenov/portafolio-angular'
    },
    {
      title: 'Backend for Frontend',
      description: 'Proyecto BFF en Spring Boot',
      image: 'assets/icons/springboot.svg',
      link: 'https://github.com/vmorenov/bff-backend'
    },
    {
      title: 'Simulador PKCE',
      description: 'Simulador de API Manager con PKCE para SPA',
      image: 'assets/icons/springboot.svg',
      link: 'https://github.com/vmorenov/simulador-pkce'
    }
  ];
}
