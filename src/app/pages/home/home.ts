import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // 🔹 Esto es obligatorio para componentes standalone
  imports: [],      // 🔸 Aquí puedes importar otros componentes/modulos si necesitas
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ✅ Aquí va con "s"
})
export class Home {}
