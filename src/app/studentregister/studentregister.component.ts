import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-studentregister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,  NavbarComponent],
  templateUrl: './studentregister.component.html',
  styleUrl: './studentregister.component.css'
})
export class StudentregisterComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private student:StoreService, private router: Router) {
      this.studentForm = this.fb.group({
        fullName: ['', Validators.required],
        matricNumber: ['', Validators.required],
        level: ['', Validators.required],
        department: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        libraryID: [this.generateLibraryID()]
      });
    }
  

    // function to generate random library ID
    generateLibraryID(){
      let libraryID = Math.floor(Math.random() * 999999)
      return libraryID
    
    }


    ngOnInit(): void {}

    onSubmit(): void {
      if (this.studentForm.valid) {
        // Process form data here, e.g., send to backend API
        console.log(this.studentForm.value);
        
        
        this.student.registerStudent(this.studentForm.value).subscribe((data:any)=>{
         
          // if registration is succesfull
          if(data.status){
            alert(data.message)
            this.router.navigate(['login/studentlogin'])
  
          }
            alert(data.message)
                 
        })
        
        // console.log('Form Submitted', this.studentForm.value);
      } else {
        alert('Form is invalid');
      }
    }


}
