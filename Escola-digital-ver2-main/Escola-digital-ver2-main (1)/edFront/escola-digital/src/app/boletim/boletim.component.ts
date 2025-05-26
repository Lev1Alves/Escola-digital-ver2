import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent {
  constructor(private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['/home']); // Ajuste o caminho conforme suas rotas
  }
}
