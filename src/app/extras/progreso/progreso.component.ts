import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css'],
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgresoComponent {
public progreso: number = 40
}
