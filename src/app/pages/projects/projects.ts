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
    description: 'Proyecto de gateway basado en Spring Cloud para orquestación de servicios.',
    image: 'assets/icons/springboot.svg',
    link: 'https://github.com/tunick/gateway',
    tag: 'API',
    tech: ['Spring Boot', 'OpenAPI']
  },
  {
    title: 'Portafolio Angular',
    description: 'Sitio personal con SSR, diseño pastel y dark mode.',
    image: 'assets/icons/angular.svg',
    link: 'https://tu-demo.netlify.app',
    tag: 'Web',
    tech: ['Angular', 'Bootstrap']
  },
  {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  },
   {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }
  , {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }, {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }, {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }, {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }, {
    title: 'Modelo Clínica',
    description: 'PL/SQL para modelo de clínica y farmacia, con scripts de inicialización.',
    image: 'assets/icons/oracle.svg',
    link: 'https://github.com/tunick/clinica',
    tag: 'DB',
    tech: ['PL/SQL', 'Oracle']
  }
];

}
