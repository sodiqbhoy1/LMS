import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { StoreService } from '../store/store.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentlogin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './studentlogin.component.html',
  styleUrl: './studentlogin.component.css'
})
export class StudentloginComponent {

   studentForm: FormGroup;
   
     constructor(private fb: FormBuilder, private student:StoreService, public router: Router, private studentservice:StoreService) {
       this.studentForm = this.fb.group({
         
         email: ['', [Validators.required]],
         password: ['', Validators.required],
         
       });
     }
  
  
    //  when button is clicked
  
    onSubmit(): void {
      if (this.studentForm.valid) {
        // Process form data here, e.g., send to backend API
        
        this.student.loginStudent(this.studentForm.value).subscribe((response:any)=>{
         
          // if registration is succesfull
          if(response.status){

            this.studentservice.setStudentData(response.user)

            this.router.navigate(['student/profile'])
  
          } else{
            alert(response.message)
          }
                 
        })
        
        // console.log('Form Submitted', this.studentForm.value);
      } else {
        alert('Form is invalid');
      }
    }
  

}
