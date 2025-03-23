import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleThemeComponent } from '../../toggle-theme/toggle-theme.component';
import { LogoComponent } from '../../icons/logo/logo.component';
import { ROOT_PATHS } from '../../../constants/paths.constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ToggleThemeComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  readonly ROOT_PATHS = ROOT_PATHS;
}
