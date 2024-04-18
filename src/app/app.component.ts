import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescricaoComponent } from './descricao/descricao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HomeComponent, DescricaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mare-alta-surf';
}
