import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ou .scss, dependendo do que estiver usando
})
export class AppComponent {
  login() {
    const matricula = (document.getElementById('matricula') as HTMLInputElement).value;
    const senha = (document.getElementById('password') as HTMLInputElement).value;

    // Exemplo simples de verificação
    if (matricula === 'admin' && senha === '1234') {
      alert('Login bem-sucedido!');
    } else {
      alert('Matrícula ou senha incorreta.');
    }
  }
}
