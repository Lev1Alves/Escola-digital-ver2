import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoletimComponent } from './boletim/boletim.component'; // importe o componente
import { ProfessorComponent } from './professor/professor.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boletim', component: BoletimComponent },
  { path: 'professor', component: ProfessorComponent },
];
