import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD:Escola-digital-ver2-Dev/Escola-digital-ver2-Dev/edFront/escola-digital/src/app/app.component.spec.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escola-digital'; // adiciona essa propriedade para o teste passar
}
=======
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'escola-digital' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, escola-digital');
  });
});
>>>>>>> c3c23efd34ff26c751b2e3d8d8823c70cd43cc7f:Escola-digital-ver2-main (1)/edFront/escola-digital/src/app/app.component.spec.ts
