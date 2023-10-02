import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class MensajesComponent {
  hidden = false;
  public mensajes: number = 20

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
