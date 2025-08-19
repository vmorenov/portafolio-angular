import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ClientHighlight {
  title: string;          // Nombre breve del proyecto o frente
  role?: string;          // Rol principal desempeñado
  tech?: string[];        // Tecnologías destacadas en ese frente
}

export interface Client {
  slug: string;
  name: string;
  logo: string;
  summary: string;
  tags: string[];
  highlights?: ClientHighlight[]; // NUEVO: proyectos clave
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class Clients {
  clients: Client[] = [
    {
      slug: 'cruz-verde',
      name: 'Cruz Verde',
      logo: 'assets/clients/CruzVerde.png',
      summary: 'Ecosistema de datos y procesos retail farmacéutico.',
      tags: ['Oracle', 'ODI', 'PLSQL'],
      highlights: [
        { title: 'Data Hub Retail', role: 'Tech Lead', tech: ['ODI', 'PLSQL', 'Oracle Cloud'] },
        { title: 'Dashboards C-level', role: 'BI/Reporting', tech: ['OBIEE', 'Data Mart'] }
      ]
    },
    {
      slug: 'banco-chile',
      name: 'Banco de Chile',
      logo: 'assets/clients/bcoChile.jpg',
      summary: 'Integraciones bancarias seguras y alta disponibilidad.',
      tags: ['Seguridad', 'Integración'],
      highlights: [
        { title: 'Canales Digitales', role: 'Integración', tech: ['APIs', 'TLS', 'OAuth2'] },
        { title: 'Pagos & Core', role: 'Arquitectura', tech: ['Mensajería', 'Monitoring'] }
      ]
    },
    {
      slug: 'bnp-cardif',
      name: 'BNP Paribas Cardif',
      logo: 'assets/clients/bnp.svg',
      summary: 'Desarrollo de plataformas de integracion y servicios financieros.',
      tags: ['IBM CLOUD', 'Java',  'ApiGee'],
      highlights: [
        { title: 'Plataforma Seguros', role: 'Arquitecto', tech: ['Java', 'CI/CD', 'Mashery'] },
        { title: 'ETL Financiero', role: 'Data Eng', tech: ['Datastage', 'Oracle'] }
      ]
    },
    {
      slug: 'vtr',
      name: 'VTR',
      logo: 'assets/clients/vtr.png',
      summary: 'Plataformas Legado y Migración Out of the Box Oracle.',
      tags: ['Oracle', 'Visual Studio', 'Migración'],
      highlights: [
        { title: 'Migración PL/SQL', role: 'Lead Dev', tech: ['PLSQL', 'Oracle'] },
        { title: 'Servicios Legado', role: 'Refactor', tech: ['.NET', 'CI/CD'] }
      ]
    },
    {
      slug: 'entel',
      name: 'Entel',
      logo: 'assets/clients/entel.png',
      summary: 'Integración ETL de sistemas legados con plataformas BI.',
      tags: ['ODI', 'PLSQL', 'ETL'],
      highlights: [
        { title: 'ETL Operacional', role: 'Data Eng', tech: ['ODI', 'PLSQL'] }
      ]
    }
  ];

  scroll(scroller: HTMLElement, dir: -1 | 1) {
    const delta = Math.round(scroller.clientWidth * 0.85) * dir;
    scroller.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
