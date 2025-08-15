import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Client {
  slug: string;
  name: string;
  logo: string;
  summary: string;
  tags: string[];
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
      tags: ['ETL', 'APIs', 'KPIs']
    },
    {
      slug: 'banco-chile',
      name: 'Banco de Chile',
      logo: 'assets/clients/bcoChile.jpg',
      summary: 'Integraciones bancarias seguras y alta disponibilidad.',
      tags: ['Seguridad', 'Integración']
    },
    {
      slug: 'bnp-cardif',
      name: 'BNP Paribas Cardif',
      logo: 'assets/clients/bnp.svg',
      summary: 'Soluciones Cloud y CI/CD para entornos críticos.',
      tags: ['Cloud', 'CI/CD']
    },
     {
      slug: 'vtr',
      name: 'VTR',
      logo: 'assets/clients/vtr.png',
      summary: 'Soluciones Cloud y CI/CD para entornos críticos.',
      tags: ['Cloud', 'CI/CD']
    }
  
  ];

  scroll(scroller: HTMLElement, dir: -1 | 1) {
    const delta = Math.round(scroller.clientWidth * 0.85) * dir;
    scroller.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
