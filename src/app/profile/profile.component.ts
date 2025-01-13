import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute, private studentservice: StoreService) {}

  ngOnInit(): void {


    this.studentservice.currentStudent.subscribe(student=>{

      if(student){
        this.student = student
      } else{
        console.log('No student data');
        
      }

    })


    // Retrieve the user data from query parameters

    // this.route.queryParams.subscribe((params) => {
    //   this.student = {
    //     matricNumber: params['matricNumber'],
    //     fullName: params['fullName'],
    //     email: params['email'],
    //     department: params['department'],
    //     level: params['level'],
    //     phone: params['phone'],
    //     libraryID: params['libraryID']
    //   };
    // });

  }
  }
