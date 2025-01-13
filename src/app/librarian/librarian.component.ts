import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-librarian',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.css'
})
export class LibrarianComponent {

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
