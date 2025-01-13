import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  
    selectedTab: number = 1; // Default is 'Add Product' tab
    allbooks: {book_id:string; title: string; author: string; isbn: string; published_date: string; quantity: string; category: string;  }[] = [];
    
    constructor(public books: StoreService ){}
    
    book = {
      title: '',
      author: '',
      isbn: '',
      pubDate: '',
      id: '',
      quantity: '',
      category: ''
    };
  
    selectTab(tabIndex: number) {
      this.selectedTab = tabIndex;
    }
  
    onSubmit() {
      if (this.book) {
        this.books.uploadbooks(this.book).subscribe((data:any)=>{

          if(data.status){
            alert(data.message)
            }
            alert(data.message)
        })

      } else {
        alert('Please fill in all fields');
      }
    }
    
  // fetch products when the page loads
  
  ngOnInit(): void {
    
    this.books.fetchbooks().subscribe((data:any)=>{
      if (data){
        console.log(data);
        
        this.allbooks = data.books;
      } else {
        console.log('Failed to fetch products', data.message);
      }
    })
  
  }
  
  // edit button
  editProduct(){
    console.log();
  }
  
  
  // Delete product from the list and call the API
  deleteProduct(): void {
    // // console.log(productId);
    
    // if (confirm('Are you sure you want to delete this product?')) {
    //   this.books.deleteProduct().subscribe(response => {
    //     if (response.success) {
    //       alert('Product deleted successfully');
          
    //     } else {
    //       alert('Failed to delete product');
    //     }
    //   })
    // }
  }

}
