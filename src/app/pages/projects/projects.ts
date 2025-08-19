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
    link: 'https://github.com/vmorenov/portafolio-angular',
    tag: 'Web',
    tech: ['Angular', 'Bootstrap', 'Google Recaptcha v3', 'PKCE']
  },
  {
    title: 'Microservicio EnvioEmail',
    description: 'Microservicio para enviar correos electrónicos utilizando Spring Boot y Spring email, con CI/CD hacia Cloud Run.',
    image: 'assets/icons/springboot.svg',
    link: 'https://github.com/vmorenov/senderEmail',
    tag: 'API',
    tech: ['Spring Boot', 'GCP', 'OpenAPI', 'Java' ]
  }
];

}
