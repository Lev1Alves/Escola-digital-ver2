import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import necessário

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // ✅ Adicione aqui
})
export class AppComponent {
  title = 'escola-digital';
}
