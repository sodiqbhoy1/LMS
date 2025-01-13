import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  constructor(private location: Location){}

   // Method to go back to the previous page
   goBack(): void {
    this.location.back(); // Navigate to the previous page
  }

}
