import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-librariandashboard',
  standalone: true,
  imports: [],
  templateUrl: './librariandashboard.component.html',
  styleUrl: './librariandashboard.component.css'
})
export class LibrariandashboardComponent implements OnInit {
tbooks:number=0
  constructor(private books:StoreService){}
  ngOnInit(): void {
    
    this.books.fetchbooks().subscribe((data:any)=>{
      if (data){
        console.log(data);
        
        this.tbooks = data.total;
      } else {
        console.log('Failed to fetch products', data.message);
      }
    })
  
  }
  
}
