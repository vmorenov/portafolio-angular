import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  image?: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  experienceList: Experience[] = [
    {
      company: 'Indra',
      role: 'Architect of Digital Solutions',
      period: 'Dic 2024 – May 2025',
      description:
        'Liderazgo de soluciones en IBM Cloud para BNP Paribas Cardif. Certificado como IBM Certified Cloud Developer v6. Diseño de arquitecturas escalables, integración de sistemas y optimización de procesos en entornos cloud.',
      image: 'assets/companies/indra.svg'
    },
    {
      company: 'Indra',
      role: 'Technical Lead',
      period: 'May 2023 – Dic 2024',
      description:
        'Gestión de equipos ágiles, desarrollo backend Java, arquitecturas cloud en IBM Cloud, automatización de pipelines con Jenkins, soluciones sobre Oracle, Angular y entornos híbridos en BNP Paribas Cardif.',
      image: 'assets/companies/indra.svg'
    },
    {
      company: 'Stefanini',
      role: 'IT Project Manager',
      period: 'Jun 2021 – Abr 2023',
      description:
        'Liderazgo técnico en proyectos estratégicos para BNP Paribas Cardif con tecnologías como Angular, IBM Cloud, Oracle DB, asegurando entregas de alto impacto. Coordinación de equipos y soluciones end-to-end.',
      image: 'assets/companies/stefanini.jfif'
    }
  ];
}
