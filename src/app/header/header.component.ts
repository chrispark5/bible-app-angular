import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
