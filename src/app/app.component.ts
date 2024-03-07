import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-example-project';
  public enable = 'Disabled';
}
