import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-toggle-theme',
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
  standalone: true,
})
export class ToggleThemeComponent {
  constructor(public themeService: ThemeService) {}
}
