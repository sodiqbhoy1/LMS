import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private apiUrl = `http://localhost/library`;
  private studentSource = new BehaviorSubject<any>(null);
  currentStudent = this.studentSource.asObservable();

  constructor(private http:HttpClient) { }

  // register admin
  registerAdmin(admindata:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/admin_register.php`, admindata)
  }
  // register student
  registerStudent(studentdata:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/student_register.php`, studentdata)
  }
  
// login the admin
  loginAdmin(admindata:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/admin_login.php`, admindata)
  }
// login the student
  loginStudent(studentdata:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/student_login.php`, studentdata)
  }

// upload product

uploadbooks(books:any): Observable<any>{
  return this.http.post(`${this.apiUrl}/book_upload.php`, books)
  
}

// set student when they logged in 

setStudentData(student: any): void {
  this.studentSource.next(student);
}

// clear student data
clearStudentData(): void {
  this.studentSource.next(null);
}

// fetch products
fetchbooks(): Observable<any>{
  return this.http.get(`${this.apiUrl}/fetchbooks.php`)
}

//  // Delete a product
//  deleteProduct(productId: number): Observable<any> {
//   return this.http.delete<any>(`${this.apiUrl}/delete-product.php?id=${productId}`);
// }



}
