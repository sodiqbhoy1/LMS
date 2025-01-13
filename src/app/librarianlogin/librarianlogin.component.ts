import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreService } from '../store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarianlogin',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './librarianlogin.component.html',
  styleUrl: './librarianlogin.component.css'
})
export class LibrarianloginComponent {
  librarianForm: FormGroup;
 
   constructor(private fb: FormBuilder, private admin:StoreService, private router: Router) {
     this.librarianForm = this.fb.group({
       
       email: ['', [Validators.required]],
       password: ['', Validators.required],
       
     });
   }


  //  when button is clicked

  onSubmit(): void {
    if (this.librarianForm.valid) {
      // Process form data here, e.g., send to backend API
      
      this.admin.loginAdmin(this.librarianForm.value).subscribe((data:any)=>{
       
        // if registration is succesfull
        if(data.status){
          alert(data.message)
          this.router.navigate(['librarian'])

        }
          alert(data.message)
               
      })
      
      // console.log('Form Submitted', this.librarianForm.value);
    } else {
      alert('Form is invalid');
    }
  }


}
