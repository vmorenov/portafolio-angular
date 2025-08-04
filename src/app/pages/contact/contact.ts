import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(
        'service_e4fmuvf',
        'template_pr2mp2s',
        form,
        'Jrxz3TU7Z630wsPW3'
      )
      .then(() => {
        alert('✅ Mensaje enviado con éxito.');
        form.reset();
      })
      .catch((error) => {
        console.error('❌ Error:', error);
        alert('Error al enviar el mensaje.');
      });
  }
}
