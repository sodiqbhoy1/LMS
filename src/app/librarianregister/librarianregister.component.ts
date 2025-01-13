import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-librarianregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './librarianregister.component.html',
  styleUrl: './librarianregister.component.css'
})
export class LibrarianregisterComponent {
  librarianForm: FormGroup;

  constructor(private fb: FormBuilder, private admin:StoreService, private router: Router) {
    this.librarianForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.librarianForm.valid) {
      // Process form data here, e.g., send to backend API
      
      this.admin.registerAdmin(this.librarianForm.value).subscribe((data:any)=>{
       
        // if registration is succesfull
        if(data.status){
          alert(data.message)
          this.router.navigate(['login/librarianlogin'])

        }
          alert(data.message)
               
      })
      
      // console.log('Form Submitted', this.librarianForm.value);
    } else {
      alert('Form is invalid');
    }
  }
}
