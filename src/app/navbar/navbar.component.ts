import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen: boolean = false;
  dropdownOpen: boolean = false;
  mobileDropdownOpen: boolean = false;

   // Toggle Mobile Menu
   toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Toggle Dropdown for User Menu (Desktop)
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Toggle Dropdown for User Menu (Mobile)
  toggleMobileDropdown() {
    this.mobileDropdownOpen = !this.mobileDropdownOpen;
  }

}
